/* eslint-disable import/no-import-module-exports */
// @ts-nocheck
/**
 * Create the store with dynamic reducers
 */

 import { applyMiddleware, compose, createStore } from 'redux';
 import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
 
 export default function configureStore(
   initialState = {},
   additionalMiddleware = [],
 ) {
   let composeEnhancers = compose;
   let reduxSagaMonitorOptions = {};
 
   // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
   if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
     /* eslint-disable no-underscore-dangle */
     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
 
     // NOTE: Uncomment the code below to restore support for Redux Saga
     // Dev Tools once it supports redux-saga version 1.x.x
     if (window.__SAGA_MONITOR_EXTENSION__)
       reduxSagaMonitorOptions = window.__SAGA_MONITOR_EXTENSION__;
     /* eslint-enable */
   }
 
   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
   const userListMiddleware = createSagaMiddleware();
 
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   const middlewares = [sagaMiddleware, userListMiddleware];
 
   const enhancers = [applyMiddleware(...additionalMiddleware, ...middlewares)];
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );
 
   // Extensions
   store.runSaga = sagaMiddleware.run;
   store.injectedReducers = {}; // Reducer registry
   store.injectedSagas = {}; // Saga registry
 
   // Make reducers hot reloadable, see http://mxs.is/googmo
   /* ignore next */
   if (module.hot) {
     module.hot.accept('./reducers', () => {
       store.replaceReducer(createReducer(store.injectedReducers));
     });
   }
 
   return store;
 }
 