import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PeopleList from '../components/PeopleList';

const mockStore = configureStore([thunk]);

describe('PeopleList', () => {
  let store;
  let people;

  beforeEach(() => {
    people = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' }
    ];

    store = mockStore({
      people: {
        list: people,
        loading: false,
        error: null
      }
    });
  });

  it('renders the list of people', () => {
    render(
      <Provider store={store}>
        <PeopleList />
      </Provider>
    );

    const personElements = screen.getAllByTestId('person');
    expect(personElements).toHaveLength(3);
    expect(personElements[0]).toHaveTextContent('John Doe');
    expect(personElements[1]).toHaveTextContent('Jane Smith');
    expect(personElements[2]).toHaveTextContent('Bob Johnson');
  });

  it('displays a loading message when loading', () => {
    store = mockStore({
      people: {
        list: [],
        loading: true,
        error: null
      }
    });

    render(
      <Provider store={store}>
        <PeopleList />
      </Provider>
    );

    const loadingMessageElement = screen.getByText('Loading...');
    expect(loadingMessageElement).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    store = mockStore({
      people: {
        list: [],
        loading: false,
        error: 'Failed to fetch people.'
      }
    });

    render(
      <Provider store={store}>
        <PeopleList />
      </Provider>
    );

    const errorMessageElement = screen.getByText('Failed to fetch people.');
    expect(errorMessageElement).toBeInTheDocument();
  });
});
