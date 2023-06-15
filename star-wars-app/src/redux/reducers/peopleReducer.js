import { FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_REQUEST, FETCH_PEOPLE_ERROR, FETCH_PERSON_SUCCESS, FETCH_PERSON_REQUEST, FETCH_PERSON_ERROR } from '../types';

const initialState = {
  people: [],
  person: {},
  loading: false,
  error: null,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PEOPLE_SUCCESS:
      return { ...state, loading: false, people: action.payload };
    case FETCH_PEOPLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PERSON_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PERSON_SUCCESS:
      return { ...state, loading: false, person: action.payload };
    case FETCH_PERSON_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default peopleReducer;
