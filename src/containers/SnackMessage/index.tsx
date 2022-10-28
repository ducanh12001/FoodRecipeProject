/**
 *
 * Snack Message
 *
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { createStructuredSelector } from 'reselect';
import {
  makeSnackMessageSelector,
  makeDurationSelector,
  makeSnackMessageTypeSelector,
  makeIdSelector,
  makeTranslateSelector,
} from './selectors';
import { message } from 'antd';

const key = 'snackMessage';

const stateSelector = createStructuredSelector({
  content: makeSnackMessageSelector(),
  duration: makeDurationSelector(),
  type: makeSnackMessageTypeSelector(),
  id: makeIdSelector(),
});

export default function SnackMessage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { content, type, duration, id } = useSelector(stateSelector);

  useEffect(() => {
    if (content !== '' && id !== '' && type !== '') {
      // message[type.toLowerCase()]({
      //   content: translate ? intl.formatMessage(content) : content,
      //   duration,
      //   key: id,
      // });
      if(type.toLowerCase() === 'success') {
        message.success({
          content: content,
          duration,
          key: id,
        });
      } else if(type.toLowerCase() === 'error') {
        message.error({
          content: content,
          duration,
          key: id,
        });
      } else if(type.toLowerCase() === 'info') {
        message.info({
          content:  content,
          duration,
          key: id,
        });
      } else if(type.toLowerCase() === 'warning') {
        message.warning({
          content: content,
          duration,
          key: id,
        });
      } else if(type.toLowerCase() === 'warn') {
        message.warn({
          content: content,
          duration,
          key: id,
        });
      }
    }
  }, [id]);

  return <></>;
}
