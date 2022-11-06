import { useEffect, useState } from 'react';

// Api
import { API } from '../services/api.js';

export default function useGetAdvocatesList() {
  const [advocatesList, setAdvocatesList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = API.getAllAdvocates();
      setAdvocatesList(data);
    }

    fetchData();
  }, []);

  return advocatesList;
}