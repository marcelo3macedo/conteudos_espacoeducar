import useActivity from '@/store/useActivity';

const useActivityLoad = () => {
  const { session, activeIndex, isValidated, isCorrect } = useActivity(
    (state) => state
  );

  const getActiveActivity = () => {
    return session && session.length > activeIndex - 1
      ? session[activeIndex]
      : null;
  };

  const isFinished = () => {
    return session && session.length === activeIndex;
  };

  return {
    session,
    activeIndex,
    isValidated,
    isCorrect,
    isFinished,
    getActiveActivity,
  };
};

export { useActivityLoad };
