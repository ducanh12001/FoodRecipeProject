import React from 'react';
import { put } from 'redux-saga/effects';
import { FormattedMessage } from 'react-intl';
import { enqueueAlertAction } from 'containers/AlertMessage/actions';
import { enqueueSnackMessageAction } from 'containers/SnackMessage/actions';
import { SnackSingle } from 'type/type.snackMessage';

/**
 * show formatted error alert
 * @param type
 * @param message
 * @returns {IterableIterator<*>}
 */
export function* showFormattedAlert(type: string, message: any) {
  yield put(
    enqueueAlertAction({
      message: <FormattedMessage {...message} />,
      type,
    }),
  );
}

/**
 * show formatted snack message
 * @param payload: {type: string, message: string, translate: boolean, id: string}
 * @returns {IterableIterator<*>}
 */
export function* showMessage(payload: SnackSingle) {
  yield put(enqueueSnackMessageAction(payload));
}

/**
 * show error alert
 * @param type
 * @param message
 * @returns {IterableIterator<*>}
 */
export function* showAlert(type: string, message: any) {
  yield put(
    enqueueAlertAction({
      message,
      type,
    }),
  );
}
