import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategoriesEpic } from '../store/actions/categoriesActions';
import Header from '../components/Header';
import Router from '../router/router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const categories = useSelector(({ categories }) => categories.categories);
  const dispatch = useDispatch();

  const loadCategories = useCallback(async () => {
    setError(null);
    try {
      await dispatch(fetchCategoriesEpic());
    } catch (err) {
      setError(err.message)
    }
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadCategories().then(() => setIsLoading(false));
  }, [loadCategories]);

  if (error) {
    return (<div>
      <h2>An error occurred!</h2>
      <button title='Load Categories' onClick={loadCategories} />
    </div>)
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Header {...{ categories }} />
      <div className="container-fluid content">
        <Router />
      </div>
    </div>
  );
}

export default React.memo(App);
