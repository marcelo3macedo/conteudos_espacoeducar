import { SessionResponse } from '@/interfaces/session';
import { Session } from './session';
import {
  ActivityConfig,
  NumberElement,
  NumberResult,
} from '@/interfaces/sessionConfig';
import { getRandomElements, getRandomNumber } from '@/utils/random';
import { dynamicCalculate } from '@/utils/calculations';

class FingerContableSession extends Session {
  type = 'finger-contable';

  generate(_config: ActivityConfig, element: NumberElement): SessionResponse {
    element.result = this.getNumberResultObject(element);
    const options = this.selectOptionsByRangeAsStringArray(
      element.result.value,
      5,
      4
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

  getNumberResultObject(element: NumberElement): NumberResult {
    const operation = getRandomElements(element.operations, 1)[0];
    const firstNumber = getRandomNumber(element.minNumber, element.maxNumber);
    const secondNumber = getRandomNumber(element.minNumber, element.maxNumber);
    const value = dynamicCalculate(firstNumber, secondNumber, operation);

    return {
      value,
      firstNumber,
      secondNumber,
      operation,
    };
  }
}

export default FingerContableSession;
