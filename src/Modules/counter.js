const mealCounter = (arr) => {
  const navDishes = document.querySelector('#nav-dishes');
  navDishes.textContent += ` (${arr.length})`;
};

const commentsCounter = (arr, header) => {
  if (Array.isArray(arr)) {
    header.textContent = `Comments (${arr.length})`;
  } else {
    header.textContent = 'Comments (0)';
  }
};
export { mealCounter, commentsCounter };