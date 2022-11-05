import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sizes, breakpoints } from '../utils/breakpoints.js';

const Container = styled.main`
  padding: 0 0.5rem;

  @media screen and (${breakpoints['xs']}) {
    padding: 0 0.75rem;
  }

  @media screen and (${breakpoints['sm']}) {
    padding: 0 1rem;
  }

  @media screen and (${breakpoints['md']}) {
    padding: 0;
    width: 90%;
    max-width: ${sizes['3xl']};
    margin: 0 auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(26rem, 100%), 1fr));
  gap: 0.75rem;

  @media screen and (${breakpoints['xs']}) {
    gap: 1rem;
  }

  @media screen and (${breakpoints['sm']}) {
    gap: 1.25rem;
  }
`;

// Components
import AdvocateCard from '../components/AdvocateCard/AdvocateCard.jsx';

export default function Advocates() {
  const [advocates, setAdvocates] = useState([]);
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