import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chat from './reducers/chat';
import { addUser } from './actions/actionChat';

//https://redux.js.org/api/store :
// A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
// A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.
const store = createStore(chat)

// dispatch: Dispatches an action. This is the only way to trigger a state change.
store.dispatch(addUser('Me Medesimo'))

//https://react-redux.js.org/api/provider :
// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
