import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOnline(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
