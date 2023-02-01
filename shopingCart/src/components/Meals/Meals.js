import React, { Fragment } from "react";
import MealsSummanry from "./MealsSummanry";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummanry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
