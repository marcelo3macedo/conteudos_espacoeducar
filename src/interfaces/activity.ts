import CompleteSyllable from '@/components/activities/types/completeSyllable';
import CreateWord from '@/components/activities/types/createWord';
import FingerContable from '@/components/activities/types/fingerContable';
import IdentifyImage from '@/components/activities/types/identifyImage';
import SelectImage from '@/components/activities/types/selectImage';

export type ComponentMap = {
  'complete-syllable': typeof CompleteSyllable;
  'identify-image': typeof IdentifyImage;
  'finger-contable': typeof FingerContable;
  'create-word': typeof CreateWord;
  'select-image': typeof SelectImage;
};

export interface Question {
  readonly actual: number;
  readonly total: number;
}
