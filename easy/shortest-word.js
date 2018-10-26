function findShort(s) {
  splitArray = s.split(" ");

  const total = splitArray.reduce((acc, nextItem) => {
    if (acc.length < nextItem.length) {
      return acc;
    }
    return nextItem;
  });

  return total.length;
}
