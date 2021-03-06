import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import reducers from '../reducers';

/**
 * Wrap the app into a "provider", to give it access to the Redux store.
 */

const IndexJsx = props => (
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);

export default IndexJsx;
