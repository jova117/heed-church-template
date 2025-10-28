import { useState, useEffect, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseAsyncOptions {
  immediate?: boolean;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  dependencies: unknown[] = [],
  options: UseAsyncOptions = { immediate: true }
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await asyncFunction();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('An unknown error occurred');
      setState({ data: null, loading: false, error: errorObj });
      throw errorObj;
    }
  }, dependencies.concat([asyncFunction]));

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, [execute, options.immediate]);

  return {
    ...state,
    execute,
  };
}

export default useAsync;
