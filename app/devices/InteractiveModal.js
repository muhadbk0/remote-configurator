import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import fields from "../../common/forms/interactive";

export const styles = () => ({
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

class InteractiveModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    terminalId: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    name: PropTypes.string,
    data: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
  };

  static formName = "interactiveAuthForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    props.onFinish(props.getValue("reply"));

    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("reply", ""));
      nextProps.dispatch(nextProps.clearAsyncError());
      nextProps.dispatch(nextProps.clearSubmitErrors());
      state.isOpen = nextProps.isOpen;
    }

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let prompts = this.props.data.prompts || [];

    return (
      <Dialog
        maxWidth="xs"
        open={this.props.isOpen}
        onClose={this.props.onCancel}
      >
        <DialogTitle>
          <FormattedMessage id="KEYBOARD_AUTH_TITLE" />: {this.props.name}
        </DialogTitle>
        {this.props.banner && (
          <DialogContent>
            <DialogContentText>{this.props.data.banner}</DialogContentText>
          </DialogContent>
        )}
        <DialogContent>
          {_.map(prompts, (item, index) => (
            <DialogContentText key={`error-${index}`}>
              {item.prompt}
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogContent>
          <Grid
            container
            spacing={16}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.submit}
          >
            <Grid item xs={12}>
              <Field name="reply" type="password" onSubmit={this.submit} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.submitting}
            onClick={this.props.onCancel}
          >
            <FormattedMessage id="KEYBOARD_AUTH_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="KEYBOARD_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default InteractiveModal;