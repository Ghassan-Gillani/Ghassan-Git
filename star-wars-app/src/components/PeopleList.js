import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, fetchPerson } from '../redux/actions/peopleActions';
import { Link } from 'react-router-dom';

const PeopleList = () => {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const handlePersonClick = (personId) => {
    dispatch(fetchPerson(personId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2>People List</h2>
      <ul className="list-group">
        {people.map((person) => (
          <li key={person.url} className="list-group-item">
            <Link to={`/person/${person.url.split('/')[5]}`} onClick={() => handlePersonClick(person.url.split('/')[5])}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
