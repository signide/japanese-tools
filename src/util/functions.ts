const calculateList = (words: string[], known: string[]): number => {
  if (!known[0]) {
    return 0;
  }

  const unknown = words.filter((word) => !known.includes(word));

  const firstUnchecked =
    words.findIndex((word, index) =>
      [word, words[index + 1]].every((val) => unknown.includes(val)),
    ) + 2;

  const reversed = [...words].reverse();
  const lastChecked = reversed.length;
  reversed.findIndex((word, index) =>
    [word, reversed[index + 1]].every((val) => known.includes(val)),
  );

  return ((firstUnchecked + lastChecked) / 2) * 1000;
};

export const calculate = (
  allWords: string[][],
  allKnown: string[][],
): number[] =>
  allKnown.map((known, index) => calculateList(allWords[index], known));
