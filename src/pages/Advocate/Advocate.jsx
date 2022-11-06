import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.jsx';

// Api
import { API } from '../../services/api.js';

// Styles
import { Container, AdvocateInfo } from './Advocate.styles.js';

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
    <main>
      <BreadCrumb path={path} />
      <Container>
        {advocate &&
          <AdvocateInfo>
            <figure className="advocate__figure">
              <img
                className="advocate__img"
                src={advocate["profile_pic"]}
                alt={`Profile pic of ${advocate.username}`}
              />
            </figure>
            <div className="advocate__data">
              <h2>{advocate.name}</h2>
              <h3>{advocate.username}</h3>
              <p>{advocate.bio}</p>
            </div>
          </AdvocateInfo>
        }
      </Container>
    </main>
  );
}
