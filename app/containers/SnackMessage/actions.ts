import {
  SNACK_UNMOUNT,
  AUTO_DISMISS_SNACK,
  CLEAR_SNACK,
  SHOW_SNACK_MESSAGE,
} from 'containers/SnackMessage/constants';
import { InitialStateType } from 'type/type.snackMessage';

export function enqueueSnackMessageAction(snack:InitialStateType) {
  return {
    type: SHOW_SNACK_MESSAGE,
    snack,
  };
}

export function clearSnackMessageAction() {
  return {
    type: CLEAR_SNACK,
  };
}

export function autoDismissSnackMessageAction() {
  return {
    type: AUTO_DISMISS_SNACK,
  };
}

export function snackUnmountAction() {
  return {
    type: SNACK_UNMOUNT,
  };
}
