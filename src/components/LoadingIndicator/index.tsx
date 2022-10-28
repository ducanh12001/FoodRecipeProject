import React from 'react';

import { Spin } from 'antd';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper className="mh-100 vh-center">
    <Spin className="spin" />
  </Wrapper>
);

export default LoadingIndicator;
