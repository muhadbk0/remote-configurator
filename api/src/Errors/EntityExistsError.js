const { GraphQLError } = require("graphql");

class EntityExistsError extends GraphQLError {
  constructor() {
    super("Entity already exists");
    this.code = "E_EXISTS";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "error.entityExists";
  }
}

module.exports = EntityExistsError;
