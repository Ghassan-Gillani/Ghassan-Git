

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchPeople,
  fetchPerson,
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,
  FETCH_PERSON_REQUEST,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_ERROR
} from '../redux/actions/peopleActions';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchPeople', () => {
  it('should dispatch FETCH_PEOPLE_REQUEST and FETCH_PEOPLE_SUCCESS actions on successful API call', async () => {
    const responseData = {
      results: [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' }
      ]
    };
    axios.get.mockResolvedValueOnce({ data: responseData });

    const expectedActions = [
      { type: FETCH_PEOPLE_REQUEST },
      { type: FETCH_PEOPLE_SUCCESS, payload: responseData.results }
    ];

    const store = mockStore({});
    await store.dispatch(fetchPeople());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch FETCH_PEOPLE_REQUEST and FETCH_PEOPLE_ERROR actions on failed API call', async () => {
    const errorMessage = 'Failed to fetch people';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const expectedActions = [
      { type: FETCH_PEOPLE_REQUEST },
      { type: FETCH_PEOPLE_ERROR, payload: errorMessage }
    ];

    const store = mockStore({});
    await store.dispatch(fetchPeople());

    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('fetchPerson', () => {
  it('should dispatch FETCH_PERSON_REQUEST and FETCH_PERSON_SUCCESS actions on successful API call', async () => {
    const responseData = { name: 'Luke Skywalker' };
    axios.get.mockResolvedValueOnce({ data: responseData });

    const expectedActions = [
      { type: FETCH_PERSON_REQUEST },
      { type: FETCH_PERSON_SUCCESS, payload: responseData }
    ];

    const store = mockStore({});
    await store.dispatch(fetchPerson(1));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch FETCH_PERSON_REQUEST and FETCH_PERSON_ERROR actions on failed API call', async () => {
    const errorMessage = 'Failed to fetch person';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const expectedActions = [
      { type: FETCH_PERSON_REQUEST },
      { type: FETCH_PERSON_ERROR, payload: errorMessage }
    ];

    const store = mockStore({});
    await store.dispatch(fetchPerson(1));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
