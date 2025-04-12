/**
 * Find the longest sequence in an array that passes user-defined conditions
 * @param array
 * @param predicate the conditions that an item of the array must pass to be considered part of the sequence
 */
export const findLongestSequenceInArray = <T>(array: T[], predicate: (value: T, prevValue: T) => boolean) => {
  let currentSequenceLength = 0;
  let longestSequenceLength = 0;

  array.forEach((item, index) => {
    if (index === 0 || predicate(item, array[index - 1]!)) {
      currentSequenceLength += 1;

      if (currentSequenceLength > longestSequenceLength) {
        longestSequenceLength = currentSequenceLength;
      }
    } else {
      currentSequenceLength = 0;
    }
  });

  return longestSequenceLength;
};

export const findMedian = (array: number[]): number | undefined => {
  if (!array.length) {
    return undefined;
  }

  if (array.length === 1) {
    return array[0]!;
  }

  const sortedArray = array.sort((a, b) => a - b);

  const medianIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[medianIndex - 1]! + sortedArray[medianIndex]!) / 2;
  } else {
    return sortedArray[medianIndex]!;
  }
};
