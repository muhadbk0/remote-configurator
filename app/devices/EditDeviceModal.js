import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { SubmissionError } from "redux-form/immutable";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { NextQueryRenderer } from "../app/providers/Relay";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import fields from "../../common/forms/device";

export const styles = theme => ({
  paper: {
    background: theme.main.background
  },
  error: {
    color: red[500]
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

export const query = graphql`
  query EditDeviceModalQuery($currentId: ID) {
    viewer {
      device(id: $currentId) {
        id
        name
      }
    }
  }
`;

class EditDeviceModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    classes: PropTypes.object.isRequired,
    currentId: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  static formName = "editDeviceForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    let result;

    if (props.currentId) {
      result = await props.onEdit(
        props.currentId,
        props.getValue("name"),
        props.getValue("password")
      );
    } else {
      result = await props.onCreate(
        props.getValue("name"),
        props.getValue("password")
      );
    }

    if (result && _.isObject(result)) throw new SubmissionError(result);

    return result;
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }

  renderForm() {
    return (
      <Dialog
        maxWidth="xs"
        classes={{ paper: this.props.classes.paper }}
        open
        onClose={this.props.onCancel}
      >
        <DialogTitle>
          <FormattedMessage
            id={
              this.props.currentId
                ? "EDIT_DEVICE_TITLE_EDIT"
                : "EDIT_DEVICE_TITLE_CREATE"
            }
          />
        </DialogTitle>
        {this.props.error && (
          <DialogContent>
            {_.map(
              _.isArray(this.props.error)
                ? this.props.error
                : [this.props.error],
              (error, index) => (
                <DialogContentText
                  key={`error-${index}`}
                  classes={{ root: this.props.classes.error }}
                >
                  {_.isArray(error) ? (
                    <FormattedMessage id={error[0]} values={error[1]} />
                  ) : (
                    <FormattedMessage id={error} />
                  )}
                </DialogContentText>
              )
            )}
          </DialogContent>
        )}
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
              <Field name="name" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field name="password" type="password" onSubmit={this.submit} />
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
            <FormattedMessage id="EDIT_DEVICE_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="EDIT_DEVICE_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  loadData(viewer) {
    if (this.state.isLoaded) return;

    setTimeout(() => {
      this.props.dispatch(
        this.props.change("name", _.get(viewer, "device.name", ""))
      );
      this.props.dispatch(this.props.change("password", ""));
      this.setState({ isLoaded: true });
    });
  }

  render() {
    if (!this.props.currentId) return this.renderForm();

    return (
      <NextQueryRenderer
        query={query}
        variables={{ currentId: this.props.currentId }}
        render={({ error, props }) => {
          if (error || !props) return null;
          this.loadData(props.viewer);
          return this.renderForm();
        }}
      />
    );
  }
}

export default EditDeviceModal;