import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from '../../routes';

const key = 'global';
function App() {
  const dispatch = useDispatch();

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