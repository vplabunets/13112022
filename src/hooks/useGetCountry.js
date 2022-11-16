import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCountry } from 'service/country-service';

export const useGetCountry = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getOneCountry = async () => {
      try {
        const data = await getCountry(id);
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getOneCountry();
  }, [id]);

  return {
    country,
    error,
    isLoading,
  };
};
