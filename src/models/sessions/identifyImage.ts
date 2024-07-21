import { SessionResponse } from '@/interfaces/session';
import { Session } from './session';
import { ActivityConfig, WordElement } from '@/interfaces/sessionConfig';

class IdentifyImageSession extends Session {
  type = 'identify-image';

  generate(config: ActivityConfig, element: WordElement): SessionResponse {
    const optionsCount = 3;
    const options = this.selectOptionsWithResponse(
      config.elements.map((e: any) => e.word),
      element.word,
      optionsCount
    );
    const details = {
      type: this.type,
      options,
    };

    return {
      details,
      element,
    };
  }
}

export default IdentifyImageSession;
