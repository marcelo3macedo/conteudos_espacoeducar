import useActivity from '@/store/useActivity';

const useActivityAction = () => {
  const {
    activeIndex,
    score,
    setScore,
    setIsCorrect,
    setActiveIndex,
    setIsValidated,
  } = useActivity((state) => state);

  const selectOptionHandler = (isCorrect: boolean) => {
    setActiveIndex(activeIndex + 1);
    setIsValidated(true);
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setIsValidated(false);
    }, 5000);
  };

  return {
    selectOptionHandler,
  };
};

export { useActivityAction };
