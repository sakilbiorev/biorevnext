import '../styles/global.css';

import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

import Loader from '@/components/elements/Loader';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime: number = 0;
    const endTime = 3000; // Duration in milliseconds

    const animateProgress = (timestamp: any) => {
      if (startTime > 0) {
        startTime = timestamp;
      }

      const elapsedTime = timestamp - startTime;
      const progressValue = Math.min((elapsedTime / endTime) * 100, 100);

      setProgress(Math.round(progressValue));

      if (elapsedTime < endTime) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);

    return () => {
      startTime = 0;
    };
  }, []);

  return progress !== 100 ? (
    <Loader progress={progress?.toString()} />
  ) : (
    <Component {...pageProps} />
  );
};

export default MyApp;
