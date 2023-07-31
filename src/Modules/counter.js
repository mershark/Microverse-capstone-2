/* eslint-disable linebreak-style */
const mealCounter = (arr) => {
  const nav_dishes = document.querySelector('#nav-dishes');
  nav_dishes.textContent += ` (${arr.length})`;
}
export { mealCounter };