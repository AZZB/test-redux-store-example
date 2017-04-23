import { createStore, applyMiddleware, compose } from 'redux';
import createLoggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import sagas from './sagas';


function setupStore() {

  const logger = createLoggerMiddleware();
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = [sagaMiddleware];
  let store;
  if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  } else {
    store = createStore(rootReducer, applyMiddleware(...middlewares));
  }

  sagaMiddleware.run(sagas);

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;

}

export default setupStore;
