function find_average(array) {
  const average = array.reduce((acc, nextItem) => {
    return acc + nextItem;
  });

  return average / array.length;
}
