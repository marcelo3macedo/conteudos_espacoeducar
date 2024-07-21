import { SessionResponse } from '@/interfaces/session';
import CompleteSyllable from './types/completeSyllable';
import { ComponentMap } from '@/interfaces/activity';
import IdentifyImage from './types/identifyImage';
import FingerContable from './types/fingerContable';
import CreateWord from './types/createWord';
import SelectImage from './types/selectImage';

export default function Activity({ data }: { readonly data: SessionResponse }) {
  const componentsMap: ComponentMap = {
    'complete-syllable': CompleteSyllable,
    'identify-image': IdentifyImage,
    'finger-contable': FingerContable,
    'create-word': CreateWord,
    'select-image': SelectImage,
  };

  const getContentComponent = (type: keyof ComponentMap, props: any) => {
    const Component = componentsMap[type];
    return Component ? <Component {...props} /> : null;
  };

  if (!data) return <></>;

  return (
    <>{getContentComponent(data.details.type as keyof ComponentMap, data)}</>
  );
}
