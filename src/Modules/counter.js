const mealCounter = (arr) => {
  const navDishes = document.querySelector('#nav-dishes');
  navDishes.textContent += ` (${arr.length})`;
};
export default mealCounter;