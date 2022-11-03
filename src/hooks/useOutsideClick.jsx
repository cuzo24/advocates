import { useEffect, useRef } from 'react';

export default function useOutsideClick(callback) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(evt) {
      if (ref.current && !ref.current.contains(evt.target)) {
        callback();
      }
    }

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return ref;
}