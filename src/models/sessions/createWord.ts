import { SessionResponse } from '@/interfaces/session';
import { Session } from './session';
import { ActivityConfig, WordElement } from '@/interfaces/sessionConfig';
import { addRandomElementsToArray } from '@/utils/random';

class CreateWordSession extends Session {
  type = 'create-word';

  generate(config: ActivityConfig, element: WordElement): SessionResponse {
    const optionsCount =
      element.syllables.length >= 4
        ? 6 - element.syllables.length
        : 4 - element.syllables.length;
    const options = addRandomElementsToArray(
      element.syllables,
      config.possibleOptions,
      optionsCount
    );
    const details = {
      options,
      type: this.type,
    };

    return {
      details,
      element,
    };
  }
}

export default CreateWordSession;
