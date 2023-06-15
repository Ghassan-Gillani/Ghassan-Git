import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson } from '../redux/actions/peopleActions';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { person, loading, error } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>Person Details</h2>
      <div>Name: {person.name}</div>
      <div>Height: {person.height}</div>
      <div>Mass: {person.mass}</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default PersonDetails;
