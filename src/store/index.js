import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function configureStore(...configs) {
  const store = createStore((state = {}, action) => state);
  return store;
}

export const withStore = (...configs) => component => (...rest) => {
  const store = configureStore(...configs);
  const Consumer = component;
  return <Provider store={store}>
    <Consumer {...rest} />
  </Provider>;
};
