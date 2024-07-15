import HeaderNavigation from '@/components/navigation/header';
import { MainProps } from './props/main';

function MainTheme({ children }: MainProps) {
  return (
    <div className="w-full min-h-lvh bg-yellow-50">
      <div className="mx-auto">
        <HeaderNavigation />
        {children}
      </div>
    </div>
  );
}

export default MainTheme;
