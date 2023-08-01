import { commentsCounter } from "../counter.js";

describe('Comments Counter', () => {

  beforeEach(()=> {
    document.body.innerHTML = `
    <div id="popup-header">
    <div id="popup-thumbnail">
      <img src="" id="popup-thumb">
      <i class="fa-solid fa-xmark" id="popup-close"></i>
    </div>
    <p id="popup-name"></p>
    </div>
    <div id="popup-desc">
      <div id="area">
      <p></p>
      </div>
      <div id="category">
        <p></p>
      </div>
      <div id="ingredients">
        <p></p>
      </div>
      <div id="recipe">
        <p>Recipe Toturial:</p>
        <a href="">Youtube</a>
      </div>
    </div>
    <div id="popup-responses">
      <div class="header">
        <h2></h2>
      </div>
    </div>
    <div id="popup-add-response">
      <div class="header">
        <h2></h2>
      </div>
    </div>
    `;
  })

  test('Update Header to have the correct Count of Items', () => {
    // Parameters for the commentsCounter Function
    const arr = [
      {
        obj: 'obj1'
      },
      {
        obj: 'obj2'
      },
      {
        obj: 'obj3'
      }
    ]

    const header = document.querySelector('#popup-responses .header h2')

    // call the comments Counter Function to count the items in the array and update the header

    commentsCounter(arr, header)

    // Check if the header textContent is updated correctly
    expect(header.textContent).toBe('Comments (3)');
  });

  test('Put Comments (0) if the array provided is not an array e.g. Undefined or Null', ()=> {

    // Create the Params
    const arr1 = 'Not an array'
    const arr2 = null
    const arr3 = undefined
    const header = document.querySelector('#popup-responses .header h2')

    //Call the function with each array parameter

    commentsCounter(arr1, header)
    expect(header.textContent).toBe('Comments (0)')

    commentsCounter(arr2, header)
    expect(header.textContent).toBe('Comments (0)')

    commentsCounter(arr3, header)
    expect(header.textContent).toBe('Comments (0)')

  })

})