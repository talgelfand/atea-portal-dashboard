import { useEffect, useState } from "react";

type QueryResult<T> = {
  data: T | undefined;
  error: string | null;
  isLoading: boolean;
};

const queryErrorMessage = "Something went wrong. Please try again later.";

// url is just a conventional name, in reality we will be passing mocked functions, not urls
export const useQuery = <T>(url: () => T | Promise<T>): QueryResult<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        setData(await url());
      } catch {
        setError(queryErrorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
