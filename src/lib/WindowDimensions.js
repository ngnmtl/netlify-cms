import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(0);
  useEffect(() => {
    setWindowDimensions(window.innerWidth);
  });
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
