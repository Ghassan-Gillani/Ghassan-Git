import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson } from '../redux/actions/peopleActions';

const PersonDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { person, loading, error } = useSelector((state) => state.people);

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPerson(id));
  }, [dispatch, match.params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Person Details</h2>
      <div>Name: {person.name}</div>
      <div>Height: {person.height}</div>
      <div>Mass: {person.mass}</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default PersonDetails;
