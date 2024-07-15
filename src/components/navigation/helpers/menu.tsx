import { Bars3Icon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { IMenuHelperProps } from './props/menu';
import { hasMenuSelected, menuIconHandler } from '@/helpers/navigation/header';

export default function MenuHelper({
  menuSelected,
  setMenuSelected,
}: IMenuHelperProps) {
  const handleClick = () => {
    menuIconHandler(menuSelected, setMenuSelected);
  };

  return (
    <div className="md:hidden">
      <div
        onClick={handleClick}
        className="transition-all duration-300 ease-in-out"
      >
        {hasMenuSelected(menuSelected) ? (
          <XMarkIcon className="w-8 h-8 text-slate-700 hover:cursor-pointer hover:opacity-85" />
        ) : (
          <Bars3Icon className="w-8 h-8 text-slate-700 hover:cursor-pointer hover:opacity-85" />
        )}
      </div>
    </div>
  );
}
