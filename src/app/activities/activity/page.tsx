'use client';
import ActiveQuestion from '@/components/activities/activeQuestion';
import Activity from '@/components/activities/activity';
import BackAction from '@/components/activities/backAction';
import Finished from '@/components/activities/finished';
import Validation from '@/components/activities/validation';
import { useActivityLoad } from '@/hooks/activity/load';
import MainTheme from '@/themes/main.theme';

export default function ActivityPage() {
  const { activeIndex, session, isValidated, isFinished, getActiveActivity } =
    useActivityLoad();
  const data = getActiveActivity();

  if (isValidated) {
    return <Validation />;
  }

  if (isFinished()) {
    return <Finished />;
  }

  if (!session || !data) return <></>;

  return (
    <MainTheme>
      <BackAction />
      <div className="flex flex-col flex-1 md:justify-center items-center w-full pt-2 px-2 md:px-0 md:pt-14">
        <ActiveQuestion actual={activeIndex + 1} total={session.length} />
        <div>
          <Activity data={data} />
        </div>
      </div>
    </MainTheme>
  );
}
