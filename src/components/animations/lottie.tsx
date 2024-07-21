import { useLottie } from 'lottie-react';

const LottieAnimation = ({
  animationData,
  height = 300,
  width = 300,
}: {
  animationData: any;
  height?: number;
  width?: number;
}) => {
  const options = {
    animationData: JSON.parse(JSON.stringify(animationData)),
    loop: true,
    autoplay: true,
  };

  const style = {
    height,
    width,
  };

  const { View } = useLottie(options, style);
  return View;
};

export default LottieAnimation;
