import { useEffect, useState } from 'react';

export function useScrollListener(callback: (isScrolled: boolean) => void) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const grr = window.scrollY >= window.innerHeight
        const scrollY = window.scrollY
        const innerHeight = window.innerHeight
        console.log('scrollY: ', scrollY)
        console.log('innerHeight: ', innerHeight)
        setIsScrolled(grr);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll',   
        handleScroll);
    };
  }, []);

  return [isScrolled, callback];
}