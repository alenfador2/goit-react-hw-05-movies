import { useState } from 'react';

export const useLoaderHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const open = () => setIsLoading(true);
  const close = () => setIsLoading(false);

  return { isLoading, open, close };
};
