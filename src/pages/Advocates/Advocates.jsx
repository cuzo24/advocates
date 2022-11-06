import React, { useEffect, useState } from 'react';

// Components
import AdvocateCard from '../../components/AdvocateCard/AdvocateCard.jsx';

// Styles
import { Container, Grid } from './Advocates.styles.js';

export default function Advocates() {
  const [advocates, setAdvocates] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData(page = 1) {
      try {
        const response = await fetch(`https://cados.up.railway.app/advocates/?page=${page}`);
        const data = await response.json();
        setAdvocates(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Advocates</h1>
      <Grid>
        {advocates.advocates && advocates.advocates.map(advocate => {
          return (
            <AdvocateCard
              key={advocate.username}
              name={advocate.name}
              username={advocate.username}
              profilePic={advocate["profile_pic"]}
              twitter={advocate.twitter}
            />
          );
        })}
      </Grid>
    </Container>
  );
}