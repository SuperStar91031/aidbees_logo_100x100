import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers";

const middleware = [thunk];

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, loggerMiddleware))
);

export default store;