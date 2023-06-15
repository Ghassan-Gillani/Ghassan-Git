import { fetchPeople as fetchPeopleAPI, fetchPerson as fetchPersonAPI } from '../../api/swapi';
import { FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_ERROR, FETCH_PERSON_SUCCESS, FETCH_PERSON_REQUEST, FETCH_PERSON_ERROR } from '../types';

export const fetchPeople = (page = 1) => async (dispatch) => {
  dispatch({ type: FETCH_PEOPLE_REQUEST });

  try {
    const response = await fetchPeopleAPI(page);
    dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: response.results });
  } catch (error) {
    dispatch({ type: FETCH_PEOPLE_ERROR, payload: error.message });
  }
};

export const fetchPerson = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PERSON_REQUEST });

  try {
    const response = await fetchPersonAPI(id);
    dispatch({ type: FETCH_PERSON_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_PERSON_ERROR, payload: error.message });
  }
};
