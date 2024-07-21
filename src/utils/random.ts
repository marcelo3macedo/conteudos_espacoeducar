import { Option } from '@/interfaces/sessionConfig';

function generateRandomElement() {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] / (0xffffffff + 1);
}

function getRandomElements<T>(array: T[], quantity: number): T[] {
  if (quantity > array.length) {
    throw new Error('Quantity cannot be greater than the length of the array');
  }

  const result: T[] = [];
  const usedIndices = new Set<number>();

  while (result.length < quantity) {
    const randomIndex = Math.floor(generateRandomElement() * array.length);
    if (!usedIndices.has(randomIndex)) {
      result.push(array[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return result;
}

function selectDynamicOption(options: Option[]) {
  if (options.length === 0) return undefined;

  let randomNumber = generateRandomElement();

  for (const option of options) {
    if (randomNumber < option.possibility) {
      return option.type;
    }
    randomNumber -= option.possibility;
  }

  return options[options.length - 1].type;
}

function getRandomIndexToHide<T>(array: T[]): number {
  if (array.length === 0) {
    throw new Error('Array is empty.');
  }

  const randomIndex = Math.floor(generateRandomElement() * array.length);
  return randomIndex;
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(generateRandomElement() * (max - min + 1)) + min;
}

function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(generateRandomElement() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomElement(array: string[]): string {
  const randomIndex = Math.floor(generateRandomElement() * array.length);
  return array[randomIndex];
}

function addRandomElementsToArray(
  syllables: string[],
  possibleOptions: string[],
  count: number
): string[] {
  const uniqueOptions = possibleOptions.filter(
    (option) => !syllables.includes(option)
  );
  const newElements = [];

  for (let i = 0; i < count; i++) {
    const randomOption = getRandomElement(uniqueOptions);
    if (randomOption) {
      newElements.push(randomOption);
      uniqueOptions.splice(uniqueOptions.indexOf(randomOption), 1);
    }
  }

  return shuffleArray([...syllables, ...newElements]);
}

export {
  getRandomNumber,
  getRandomElements,
  generateRandomElement,
  selectDynamicOption,
  getRandomIndexToHide,
  addRandomElementsToArray,
  shuffleArray,
};
