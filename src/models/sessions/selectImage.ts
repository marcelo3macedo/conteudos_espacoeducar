import { SessionResponse } from '@/interfaces/session';
import { Session } from './session';
import { ActivityConfig, WordElement } from '@/interfaces/sessionConfig';

class SelectImageSession extends Session {
  type = 'select-image';

  generate(config: ActivityConfig, element: WordElement): SessionResponse {
    const possibleOptions = config.elements.map((e: any) => e.word);
    const optionsCount = 3;
    const options = this.selectOptionsWithResponse(
      possibleOptions,
      element.word,
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

export default SelectImageSession;
