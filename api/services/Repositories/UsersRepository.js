const debug = require("debug")("app:users");
const EventEmitter = require("events");
const ValidationError = require("../../lib/ValidationError");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(auth, db, getState, dispatch) {
    super();

    this.auth = auth;
    this.db = db;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "db", "getState", "dispatch"];
  }

  async getUsers(context) {
    debug("users");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel)) return [];

    return _.invokeMap(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.UserModel.find(),
      "toSanitizedObject"
    );
  }

  async createUser(context, args) {
    debug("createUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let errors = [];
    if (!args.login)
      errors.push({ key: "login", message: "ERROR_FIELD_REQUIRED" });
    if (!args.password)
      errors.push({ key: "password", message: "ERROR_FIELD_REQUIRED" });
    if (errors.length) throw new ValidationError(errors);

    let target = new this.db.UserModel({
      login: args.login,
      password: await this.auth.encryptPassword(args.password),
      roles: args.roles || []
    });

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async editUser(context, args) {
    debug("editUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    if (!args.login) {
      throw new ValidationError([
        { key: "login", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    target.login = args.login;
    if (args.password)
      target.password = await this.auth.encryptPassword(args.password);
    target.roles = args.roles;

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async deleteUser(context, args) {
    debug("deleteUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    let devices = await this.db.DeviceModel.find({ owner: target.id });
    await Promise.all(_.invokeMap(devices, "remove"));

    await target.remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }
}

module.exports = UsersRepository;
