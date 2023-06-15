import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople } from '../redux/actions/peopleActions';

const PeopleList = () => {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
