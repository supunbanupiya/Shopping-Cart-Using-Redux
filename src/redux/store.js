
import { composeWithDevTools } from "@redux-devtools/extension";
import reducers from './reducers/index';
import redux from 'redux';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default store;