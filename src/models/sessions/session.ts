import { SessionResponse } from '@/interfaces/session';
import { ActivityConfig, Element } from '@/interfaces/sessionConfig';
import { shuffleArray } from '@/utils/random';

export abstract class Session {
  abstract generate(config: ActivityConfig, element: Element): SessionResponse;

  protected selectOptionsWithResponse(
    array: string[],
    response: string,
    optionsCount: number
  ): string[] {
    const filteredArray = array.filter((item) => item !== response);

    const selectedOptions = [];
    for (let i = 0; i < optionsCount; i++) {
      const randomIndex = Math.floor(Math.random() * filteredArray.length);
      selectedOptions.push(filteredArray[randomIndex]);
      filteredArray.splice(randomIndex, 1); // Remove the selected element to avoid duplicates
    }

    selectedOptions.push(response);

    for (let i = selectedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedOptions[i], selectedOptions[j]] = [
        selectedOptions[j],
        selectedOptions[i],
      ];
    }

    return selectedOptions;
  }

  protected selectOptionsByRangeAsStringArray(
    correctNumber: number,
    range: number,
    numOptions = 4
  ): string[] {
    const options = new Set<string>();
    options.add(correctNumber.toString());

    while (options.size < numOptions) {
      const randomOption = Math.floor(Math.random() * range) + 1;
      options.add(randomOption.toString());
    }

    return shuffleArray(Array.from(options));
  }
}
