//  Find the smallest integer in the array
// Given [34, 15, 88, 2] your solution will return 2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    const smallest = args.reduce((acc, value) => {
      if (acc < value) {
        return acc;
      }
      return value;
    });
    return smallest;
  }
}
