import { scores } from '@/util/words';

const calculateList = (words: string[], known: string[]): number => {
  if (!known[0]) {
    return 0;
  }

  const unknown = words.filter((word) => !known.includes(word));

  const firstUnchecked = words.find((word, index) => {
    if (index === 0) {
      return false;
    }
    return [word, words[index - 1]].every((val) => unknown.includes(val));
  });

  const reversed = [...words].reverse();
  const lastChecked = reversed.find((word, index) => {
    return [word, reversed[index + 1]].every((val) => known.includes(val));
  });

  return (scores[firstUnchecked] + scores[lastChecked]) / 2;
};

export const calculate = (
  allWords: string[][],
  allKnown: string[][],
): number[] =>
  allKnown.map((known, index) => calculateList(allWords[index], known));
