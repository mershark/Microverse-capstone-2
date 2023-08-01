const mealCounter = (arr) => {
  const navDishes = document.querySelector('#nav-dishes');
  if (Array.isArray(arr)) {
    navDishes.textContent = `Dishes (${arr.length})`;
  }
  else {
    navDishes.textContent = 'Dishes (0)'
  }
};

export default mealCounter