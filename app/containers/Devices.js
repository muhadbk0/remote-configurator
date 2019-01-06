import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { appSelectors } from "../state/app";
import { authSelectors } from "../state/auth";
import { devicesSelectors, devicesOperations } from "../state/devices";
import DevicesComponent from "../components/Devices";

const mapStateToProps = state => {
  return {
    sshHost: appSelectors.getSshHost(state),
    sshPort: appSelectors.getSshPort(state),
    login: authSelectors.getLogin(state) || "",
    devices: devicesSelectors.getList(state),
    online: devicesSelectors.getOnline(state),
    isAllSelected: devicesSelectors.isAllSelected(state),
    isAllDeselected: devicesSelectors.isAllDeselected(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(devicesOperations.load()),
    onCreate: () => dispatch(devicesOperations.showEditModal()),
    onEdit: () => dispatch(devicesOperations.editFirstSelected()),
    onDelete: deviceId =>
      dispatch(devicesOperations.reqRemove({ id: deviceId })),
    onSetSelected: (deviceId, isSelected) =>
      dispatch(devicesOperations.setSelected({ deviceId, isSelected })),
    onSelectAll: () => dispatch(devicesOperations.selectAll()),
    onDeselectAll: () => dispatch(devicesOperations.deselectAll()),
    onConnect: deviceId => dispatch(devicesOperations.startAuth({ deviceId })),
    onDisconnect: deviceId =>
      dispatch(devicesOperations.disconnect({ deviceId })),
    onOpenTerminal: deviceId =>
      dispatch(devicesOperations.openTerminal({ deviceId }))
  };
};

const Devices = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DevicesComponent)
);

export default Devices;