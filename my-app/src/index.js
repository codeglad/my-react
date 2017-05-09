import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore, combineReducers } from 'redux';
import bugsReducer from './reducers/bugsReducer';
import empReducer from './reducers/empReducer';

import { Provider } from 'react-redux'

var combinedReducers = combineReducers({
	bugs : bugsReducer,
	emps : empReducer
});

var store = createStore(combinedReducers);

console.log('state -> ', store.getState());

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);


