import { useCallback, useEffect, useState } from 'react';


const useDebounce = () => {
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }, [timer]);

  const debounce = useCallback((fn: Function, delay: number) => {
    const timer = setTimeout(fn, delay);
    setTimer(timer);
  }, []);

  return debounce;
}

export default useDebounce;