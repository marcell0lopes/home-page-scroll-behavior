import { useTransform } from 'framer-motion';
import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { CarModel } from '../ModelsContext';
import { useWrapperScroll } from '../useWrapperScroll';

import { Container } from './styles';

interface ModelOverlayProps {
  children: ReactNode;
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>;

function ModelOverlay({ model, children }: ModelOverlayProps) {
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [getSectionDimensions, model.sectionRef]);

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? 'auto' : 'none'
  );

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
}

export default ModelOverlay;
