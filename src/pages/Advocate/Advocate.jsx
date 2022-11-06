import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';

// Api
import { API } from '../../services/api.js';

export default function Advocate() {
  const { username } = useParams();
  const [advocate, setAdvocate] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await API.getAdvocate(username);
      setAdvocate(data);
    }

    fetchData();
  });

  const path = [
    { url: "/", name: "Home" },
    { url: "/advocates", name: "Advocates" },
    { name: advocate.username }
  ];

  return (
    <div>
      <BreadCrumb path={path} />
      {advocate && advocate.bio}
    </div>
  );
}
