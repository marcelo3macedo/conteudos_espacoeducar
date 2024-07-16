import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';
import { useProfileNavigation } from '@/hooks/navigation/profile';
import { IInfosHelperProps } from './props/infos';
import { useTranslations } from 'next-intl';

export default function InfosHelper({
  setMenuSelected,
}: Readonly<IInfosHelperProps>) {
  const { name, points, avatar } = useProfileNavigation();
  const t = useTranslations('header');

  function actionHandler() {
    setMenuSelected('avatar');
  }

  return (
    <button
      className="flex items-center select-none hover:opacity-90 hover:cursor-pointer"
      onClick={actionHandler}
    >
      <div className="pt-1 px-2">
        <div className="rounded-full border-slate-400 border-2">
          <Image
            src={avatar}
            width={150}
            height={150}
            alt="Perfil"
            className="h-16 w-16 rounded-full border-slate-100 border-2"
          />
        </div>
      </div>
      <div className="px-1 text-left">
        <h4 className="text-xs">{t('hello')},</h4>
        <h2 className="text-md font-bold">{name}</h2>

        <div className="flex items-center">
          <BoltIcon className="w-4 h-4 text-yellow-800" />
          <h2 className="text-sm mx-1">
            {points} {t('points')}
          </h2>
        </div>
      </div>
    </button>
  );
}
