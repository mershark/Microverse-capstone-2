const commentsCounter = (arr, header) => {
  if (Array.isArray(arr)) {
    header.textContent = `Comments (${arr.length})`;
  } else {
    header.textContent = 'Comments (0)';
  }
};
export default commentsCounter;