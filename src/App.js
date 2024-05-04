import { Box, Container, Grid, Select, Stack, Typography } from '@mui/material';
import './App.css';
import JobCard from './components/JobCard';
import MultiSelectInput from './components/MultiSelectInput';
import { useJobsFetcher } from './hooks/useJobsFetcher';
import { useEffect, useState } from 'react';

function App() {
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const { jobs, loading, totalCount } = useJobsFetcher(offset, limit);

  const handleScroll = () => {
    console.log({ loading, length: jobs.length, totalCount })
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      setOffset(prevOffset => prevOffset + 10);
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <Container maxWidth="xl">
      <Stack direction="row" marginBottom={5} marginTop={5}>
        <MultiSelectInput title="Some" values={["this", "that", "some", "value"]} />
      </Stack>

      <Grid container spacing={4}>
        {jobs.map((job) => (<Grid key={job.jdUid} item xs={4}>
          <JobCard />
        </Grid>))}
      </Grid>
      {loading && <Stack direction="row" sx={{ width: "100%", padding: "2rem 0", justifyContent: "center" }}>
        <Typography>Hang on! Getting more jobs...</Typography>
      </Stack>}
    </Container>
  );
}

export default App;
