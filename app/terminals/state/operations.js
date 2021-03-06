import * as actions from "./actions";
import { historiesOperations } from "../../histories/state";
import constants from "../../../common/constants";

export const clear = actions.clear;
export const set = actions.set;

export const sendInput = ({ terminalId, data }) => async (
  dispatch,
  getState,
  di
) => {
  let socket = di.get("socket");
  if (socket) {
    socket.emit(constants.messages.TERMINAL_INPUT, { terminalId, data });
  }
};

export const sendResize = ({ terminalId, cols, rows, width, height }) => async (
  dispatch,
  getState,
  di
) => {
  let socket = di.get("socket");
  if (socket) {
    socket.emit(constants.messages.TERMINAL_RESIZED, {
      terminalId,
      cols,
      rows,
      width,
      height
    });
  }
};

export const kill = ({ terminalId }) => async (dispatch, getState, di) => {
  let socket = di.get("socket");
  if (socket) {
    socket.emit(constants.messages.DISCONNECT_TERMINAL, {
      terminalId
    });
  }
};

export const remove = ({ terminalId }) => async dispatch => {
  await dispatch(historiesOperations.remove({ terminalId }));
  return dispatch(actions.remove({ terminalId }));
};
