import Image from 'next/image';
import dog from '@/assets/images/profiles/dog.jpg';
import cat from '@/assets/images/profiles/cat.jpg';
import { useProfileNavigation } from '@/hooks/navigation/profile';
import { ISidebarAvatarHelperProps } from './props/sidebar';
import { useTranslations } from 'next-intl';

export default function SidebarAvatarHelper({
  setMenuSelected,
}: Readonly<ISidebarAvatarHelperProps>) {
  const { name, setName, setAvatar } = useProfileNavigation();
  const t = useTranslations('header');

  function applyHandler() {
    setMenuSelected('');
  }

  function inputBlurHandler(e: any) {
    setName(e.target.value);
  }

  return (
    <div className="relative select-none rounded-es-3xl rounded-br-3xl w-full px-6 py-4 transition-all duration-300 ease-in-out bg-pink-300 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
      <h2 className="mb-1 text-md font-bold">{t('chooseYourName')}</h2>
      <input
        className="mb-4 px-4 text-sm py-2 rounded-md w-full"
        defaultValue={name}
        onBlur={inputBlurHandler}
      />
      <h2 className="mb-4 text-md font-bold">{t('chooseYourAvatar')}</h2>
      <div className="grid grid-cols-3 md:grid-cols-3 mx-auto">
        <button
          className="rounded-full mx-auto"
          onClick={() => {
            setAvatar(cat.src);
          }}
        >
          <Image
            src={cat.src}
            width={150}
            height={150}
            alt={t('chooseYourAvatar')}
            className="h-16 w-16 rounded-full border-slate-100 border-2"
          />
        </button>
        <button
          className="rounded-full mx-auto"
          onClick={() => {
            setAvatar(dog.src);
          }}
        >
          <Image
            src={dog.src}
            width={150}
            height={150}
            alt={t('chooseYourAvatar')}
            className="h-16 w-16 rounded-full border-slate-100 border-2"
          />
        </button>
      </div>
      <button
        className="mt-8 inline-block w-full text-center bg-pink-800 px-8 py-2 rounded-lg text-white font-bold text-sm border border-pink-700 hover:cursor-pointer hover:opacity-80"
        onClick={applyHandler}
      >
        {t('apply')}
      </button>
    </div>
  );
}
