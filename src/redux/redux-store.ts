import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, 
  applyMiddleware(thunk, sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;