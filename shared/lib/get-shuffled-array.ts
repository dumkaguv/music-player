// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getShuffledArray = (array: Array<any>) => {
  const arrayCopy = [...array];

  for (let i = arrayCopy.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }

  return arrayCopy;
};
