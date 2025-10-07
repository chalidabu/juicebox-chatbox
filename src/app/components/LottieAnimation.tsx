'use client';
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../../public/juicebox.json";

interface LottieAnimationProps {
  loop?: boolean;
  autoplay?: boolean;
  width?: string | number;
  height?: string | number;
}
const LottieAnimation = ({
  loop= true, autoplay= true, width= 200, height= 200
}: LottieAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current!,
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      animationData: animationData
    });

    return () => anim.destroy();
  }, [loop, autoplay])

  return (
    <div ref={container} style={{ width, height }} />
  )
}

export default LottieAnimation;