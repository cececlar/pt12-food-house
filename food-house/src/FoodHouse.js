import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import DishCard from './components/DishCard'

const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('chicken')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(data);
 

  return (
    <Fragment>
      {/* Whoa - are we literally passing a function as a component prop? Yes. Yes we are. */}
      <SearchForm setSearch={setSearch} initialPlaceholder={search} />
      <div className="container">
        {data.hits && data.hits.length
          ? data.hits.map(meal => <DishCard key={meal.idMeal} meal={meal} />)
          : "Nothing found :-/"}
      </div>
    </Fragment>
  );
}

export default FoodHouse;