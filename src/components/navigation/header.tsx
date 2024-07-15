'use client';
import Image from 'next/image';
import headerEffects from '@/assets/images/header/effects.png';
import { useHeaderNavigation } from '@/hooks/navigation/header';
import MenuHelper from './helpers/menu';
import ItemsHelper from './helpers/items';
import InfosHelper from './helpers/infos';
import EffectHelpers from './helpers/effect';
import SidebarHelper from './helpers/sidebar';

export default function HeaderNavigation() {
  const { items, menuSelected, setMenuSelected } = useHeaderNavigation();

  return (
    <nav className="relative  min-h-24 overflow-hidden">
      <div className="bg-pink-300">
        <div className="container  mx-auto relative overflow-hidden">
          <Image
            src={headerEffects.src}
            alt="Effects"
            layout="fill"
            objectFit="none"
            className="opacity-5 md:hidden"
          />
          <div className="flex justify-between p-4 pb-0 z-10 relative md:pb-4">
            <InfosHelper setMenuSelected={setMenuSelected} />
            <MenuHelper
              menuSelected={menuSelected}
              setMenuSelected={setMenuSelected}
            />
            <ItemsHelper items={items} />
          </div>
          <SidebarHelper
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
          />
        </div>
      </div>
      <EffectHelpers />
    </nav>
  );
}
