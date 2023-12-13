import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Head from './Head';

// Importing slices
import appSlice from '../utils/appSlice';
import searchSlice from '../utils/searchSlice';

const mockStore = configureStore([]);

describe('Head component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      app: appSlice(undefined, {}),
      search: searchSlice(undefined, {}),
    });
  });

  test('Toggles the menu when hamburger icon is clicked', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Head />
      </Provider>
    );

    const hamburgerIcon = getByAltText('menu-items');

    fireEvent.click(hamburgerIcon);

    // Dispatching an action to the store for toggling menu
    const actions = store.getActions();
    expect(actions).toContainEqual({ type: 'app/toggleMenu'});
  });
});
