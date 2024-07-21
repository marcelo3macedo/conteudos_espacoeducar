import { generateSession } from '@/helpers/student/activity';
import useActivity from '@/store/useActivity';
import { fetchActivity } from '@/utils/fetch';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useStudentSlug = (slug: string) => {
  const router = useRouter();
  const [activity, setActivity] = useState<any>(null);
  const { setSession, setActiveIndex, setScore } = useActivity(
    (state) => state
  );

  useEffect(() => {
    const loadData = async () => {
      const activity = await fetchActivity(slug);
      setActivity(activity);
    };

    loadData();
  }, [slug]);

  async function startActivity() {
    const session = await generateSession(slug);

    setSession(session);
    setActiveIndex(0);
    setScore(0);
    router.push('/atividades/atividade');
  }

  return {
    activity,
    startActivity,
  };
};

export { useStudentSlug };
