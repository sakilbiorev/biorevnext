import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Loader from '@/components/elements/Loader';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      setProgress(0);
    };

    const handleComplete = () => {
      setLoading(false);
      setProgress(100);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return loading ? (
    <Loader progress={progress?.toString()} />
  ) : (
    <Component {...pageProps} />
  );
};

export default MyApp;
