import React, { useEffect, useState } from 'react';

// Components
import AdvocateCard from '../../components/AdvocateCard/AdvocateCard.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';

// Hooks
import { usePageStateContext } from '../../hooks/usePageStateContext.jsx';
import { usePageApiContext } from '../../hooks/usePageApiContext.jsx';

// Api
import { API } from '../../services/api.js';

// Styles
import { Container, Grid } from './Advocates.styles.js';

export default function Advocates() {
  const [advocates, setAdvocates] = useState([]);
  const { page } = usePageStateContext();
  const { setTotalPages } = usePageApiContext();

  useEffect(() => {
    async function fetchData(page = 1) {
      const data = await API.getAdvocatesByPage(page);
      setAdvocates(data.advocates);
      setTotalPages(data.pagination['total_pages']);
    }

    fetchData(page);
  }, [page]);

  return (
    <Container>
      <h1>Advocates</h1>
      <Grid>
        {advocates.map(advocate => {
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
      <Pagination />
    </Container>
  );
}