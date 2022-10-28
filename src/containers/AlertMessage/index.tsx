/**
 *
 * Alert Message
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
import {
  makeAlertMessageSelector,
  makeAlertMessageTypeSelector,
  makeAlertShowSelector,
  makeIdSelector,
} from './selectors';
import { Alert } from 'antd';
import { autoDismissAlertAction } from './actions';

const key = 'alertMessage';

const stateSelector = createStructuredSelector({
  message: makeAlertMessageSelector() ,
  show: makeAlertShowSelector(),
  type: makeAlertMessageTypeSelector(),
  id: makeIdSelector(),
});

export default function AlertMessage() {
  const dispatch = useDispatch();
  const autoDismiss = () => dispatch(autoDismissAlertAction());

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { message, type, id, show } = useSelector(stateSelector);

  useEffect(() => {
    if (message !== '') {
      autoDismiss();
    }
  }, [message]);

  if (!show) {
    return <></>;
  }

  return (
    <Alert
      key={id}
      message={type}
      description={message}
      type={type}
      showIcon
      closable
    />
  );
}
