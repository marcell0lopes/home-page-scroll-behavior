import { useMotionValue } from 'framer-motion';
import { useContext, useEffect } from 'react';
import ModelsContext from './ModelsContext';

export function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      const updateScrollValue = () => {
        if (element) {
          const { scrollTop, scrollHeight, offsetHeight } = element;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop); //number
          scrollYProgress.set(scrollTop / fullScroll); // 0 - 1 (%)
        }
      };

      element.addEventListener('scroll', updateScrollValue);

      return () => element?.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
