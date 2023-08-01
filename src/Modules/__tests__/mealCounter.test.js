import mealCounter from '../mealCounter.js';

describe('Meals Counter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <nav id="Navbar">
      <div id="brand">
        <img src="" alt="logo" id="logo">
      </div>
      <ul id="nav-list">
        <li class="nav"><a href="#" id="nav-dishes">Dishes</a></li>
        <li class="nav"><a href="#">Page2</a></li>
        <li class="nav"><a href="#">Page3</a></li>
      </ul>
    </nav>
    `;
  });
  test('Update Header to have the correct Count of Items', () => {
    // Parameters for the commentsCounter Function
    const arr = [
      {
        obj: 'obj1',
      },
      {
        obj: 'obj2',
      },
      {
        obj: 'obj3',
      },
    ];

    const nav = document.querySelector('#nav-dishes');

    // call the comments Counter Function to count the items in the array and update the header

    mealCounter(arr);

    // Check if the header textContent is updated correctly
    expect(nav.textContent).toBe('Dishes (3)');
  });

  test('Update Header to have the 0 items if the items are not fetched correctly', () => {
    // Parameters for the mealCounter function
    const arr1 = 'Not array';
    const arr2 = undefined;
    const arr3 = null;

    const nav = document.querySelector('#nav-dishes');

    // call the meal Counter function on each incorrect parameter

    mealCounter(arr1);
    expect(nav.textContent).toBe('Dishes (0)');

    mealCounter(arr2);
    expect(nav.textContent).toBe('Dishes (0)');

    mealCounter(arr3);
    expect(nav.textContent).toBe('Dishes (0)');
  });
});