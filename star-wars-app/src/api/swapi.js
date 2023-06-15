import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchPeople = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPerson = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
