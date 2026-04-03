import { useState, useEffect } from "react";

export const useLoading = (delay = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setHasLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading, hasLoaded };
};

export const useProgressiveLoading = (items: any[], itemDelay = 200) => {
  const [loadedItems, setLoadedItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoadedItems([]);
    setIsLoading(true);

    const timers: number[] = [];

    items.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setLoadedItems((prev) => [...prev, index]);

        if (index === items.length - 1) {
          setTimeout(() => setIsLoading(false), 100);
        }
      }, index * itemDelay);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [items, itemDelay]);

  return { loadedItems, isLoading };
};
