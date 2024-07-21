import CompleteSyllableSession from '@/models/sessions/completeSyllable';
import CreateWordSession from '@/models/sessions/createWord';
import FingerContableSession from '@/models/sessions/fingerContable';
import IdentifyImageSession from '@/models/sessions/identifyImage';
import SelectImageSession from '@/models/sessions/selectImage';
import { Session } from '@/models/sessions/session';

function sessionFactory(type: string): Session {
  switch (type) {
    case 'complete-syllable':
      return new CompleteSyllableSession();
    case 'create-word':
      return new CreateWordSession();
    case 'finger-contable':
      return new FingerContableSession();
    case 'identify-image':
      return new IdentifyImageSession();
    case 'select-image':
      return new SelectImageSession();
    default:
      throw new Error(`Unknown session type: ${type}`);
  }
}

export { sessionFactory };
