/* eslint-disable linebreak-style */
import { MEAL_DB_URL } from './API-Data.js';

const getMealList = async () => {
  const request = await fetch(MEAL_DB_URL);
  const { meals } = await request.json();
  return meals;
};

export default getMealList;