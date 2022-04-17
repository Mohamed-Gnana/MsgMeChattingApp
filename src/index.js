import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducers/rootreducer";
import thunk from "redux-thunk";
import { getFirebase , ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import fbConfig from "./config/fbconfig";

const store = createStore(RootReducer,
  applyMiddleware(thunk.withExtraArgument({getFirebase}))
);
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const rrfProps = {
  firebase:fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance : createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
