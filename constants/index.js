import { useMediaQuery } from 'react-responsive';

export const useMaskSettings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  if (isMobile) {
    return {
      initialMaskPos: '45% -1430vh',
      initialMaskSize: '3100% 2900%',
      maskPos: '50% 7vh',
      maskSize: '50% 50%',
    };
  }

  if (isTablet) {
    return {
      initialMaskPos: '45% -1600vh',
      initialMaskSize: '3500% 3500%',
      maskPos: '50% 17vh',
      maskSize: '30% 30%',
    };
  }

  return {
    initialMaskPos: '45% -150%',
    initialMaskSize: '3600% 3600%',
    maskPos: '50% 17vh',
    maskSize: '20% 20%',
  };
};
