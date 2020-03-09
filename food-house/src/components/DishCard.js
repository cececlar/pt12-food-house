import React from "react";
import './DishCard.css'

const DishCard = props => {

  return (
    <div className="card">
      <img className="card-img-top" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
      <div className="card-body">
        <h5 className="card-title">{props.meal.strMeal}</h5>
      </div>
    </div>
  );
};

export default DishCard;
