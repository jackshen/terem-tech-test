import { findLongestSequenceInArray, findMedian } from "../helpers";

const array = [
  2, 4, 4, 2, 0, 9, 6, 8, 2, 6, 3, 5, 8, 3, 5, 3, 8, 8, 8, 8, 8, 6, 7, 5, 6, 8, 5, 9, 8, 6, 2, 1, 5, 7, 7, 4, 2, 3, 4,
  1, 2, 0, 0, 9, 8, 6, 1, 1, 1, 5, 4, 7, 5, 6, 4, 7, 5, 5, 8, 3, 6, 2, 7, 6, 2, 4, 5, 7, 3, 1, 5, 4, 5, 6, 7, 8,
];

describe("findLongestSequenceInArray", () => {
  it("finds the longest sequence in an array", () => {
    expect(findLongestSequenceInArray(array, (value) => value === 8)).toBe(5);
  });
});

describe("findMedian", () => {
  it("finds the median of an unsorted array of numbers", () => {
    expect(findMedian(array)).toBe(5);
  });

  it("finds the median of an array with one element", () => {
    expect(findMedian([0])).toBe(0);
  });

  it("finds the median of an empty array to be undefined", () => {
    expect(findMedian([])).toBe(undefined);
  });
});
