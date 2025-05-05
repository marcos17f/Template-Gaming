"use client";
import React, { useState, useEffect } from "react";
import useTextAnimation from "@/hooks/use-text-animation";
import { useInView } from "react-intersection-observer";

// props type
type IProp = {
  title: string;
  style_2?: boolean;
};

const TextAnimation = ({ title, style_2 = false }: IProp) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // Ensure useTextAnimation is called unconditionally
  useTextAnimation(hasAnimated);

  // Trigger the animation only the first time inView is true
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <>
      {!style_2 && (
        <span ref={ref} className={`sub-title tg__animate-text`}>
          {title}
        </span>
      )}
      {style_2 && (
        <p ref={ref} className={`tg__animate-text style2`}>
          {title}
        </p>
      )}
    </>
  );
};

export default TextAnimation;
