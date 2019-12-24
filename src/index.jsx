import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import appReducer from './reducers/appReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancer(applyMiddleware(thunk)),
)

ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
