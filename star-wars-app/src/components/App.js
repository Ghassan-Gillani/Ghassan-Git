import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import PeopleList from './PeopleList';
import PersonDetails from './PersonDetails';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const App = () => {
  const [page, setPage] = useState(1);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PeopleList />} />
          <Route path="/person/:id" element={<PersonDetails />} />
        </Routes>
        <Pagination page={page} setPage={setPage} />
      </Router>
    </Provider>
  );
};

export default App;
