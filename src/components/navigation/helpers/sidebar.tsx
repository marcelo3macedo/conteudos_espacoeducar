import { ISidebarHelperProps } from './props/sidebar';
import SidebarAvatarHelper from './sidebar-avatar';
import SidebarGeneralHelper from './sidebar-general';

export default function SidebarHelper({
  menuSelected,
  setMenuSelected,
}: Readonly<ISidebarHelperProps>) {
  return (
    <div className="block md:hidden transition-all duration-300 ease-in-out">
      {menuSelected === 'menu' ? <SidebarGeneralHelper /> : <></>}
      {menuSelected === 'avatar' ? (
        <SidebarAvatarHelper setMenuSelected={setMenuSelected} />
      ) : (
        <></>
      )}
    </div>
  );
}
