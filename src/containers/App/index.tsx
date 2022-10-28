import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from '../../routes';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { isLoggedErrorAction, isLoggedSuccessAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'global';

function App() {
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    
  }, [])

  return (
    <Layout>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </Layout>
  )
}

export default App