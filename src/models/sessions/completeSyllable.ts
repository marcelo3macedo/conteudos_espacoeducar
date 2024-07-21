import { SessionResponse } from '@/interfaces/session';
import { Session } from './session';
import { ActivityConfig, WordElement } from '@/interfaces/sessionConfig';
import { getRandomIndexToHide } from '@/utils/random';

class CompleteSyllableSession extends Session {
  type = 'complete-syllable';

  generate(config: ActivityConfig, element: WordElement): SessionResponse {
    const optionsCount = 3;
    const indexToHide = getRandomIndexToHide(element.syllables);
    const options = this.selectOptionsWithResponse(
      config.possibleOptions,
      element.syllables[indexToHide],
      optionsCount
    );
    const details = {
      indexToHide,
      options,
      type: this.type,
    };

    return {
      details,
      element,
    };
  }
}

export default CompleteSyllableSession;
