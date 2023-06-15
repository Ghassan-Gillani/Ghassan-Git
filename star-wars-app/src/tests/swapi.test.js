

import axios from 'axios';
import {
  fetchPeople,
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from '../api/swapi';

jest.mock('axios');

describe('fetchPeople', () => {
  it('should dispatch FETCH_PEOPLE_REQUEST and FETCH_PEOPLE_SUCCESS actions on successful API call', async () => {
    const responseData = {
      results: [
        { name: 'Luke Skywalker' },
        { name: 'Darth Vader' }
      ]
    };
    axios.get.mockResolvedValueOnce({ data: responseData });

    const dispatch = jest.fn();
    await fetchPeople()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: FETCH_PEOPLE_REQUEST });
    expect(dispatch).toHaveBeenCalledWith({ type: FETCH_PEOPLE_SUCCESS, payload: responseData.results });
  });

  it('should dispatch FETCH_PEOPLE_REQUEST and FETCH_PEOPLE_ERROR actions on failed API call', async () => {
    const errorMessage = 'Failed to fetch people';
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    const dispatch = jest.fn();
    await fetchPeople()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({ type: FETCH_PEOPLE_REQUEST });
    expect(dispatch).toHaveBeenCalledWith({ type: FETCH_PEOPLE_ERROR, payload: errorMessage });
  });
});
