import { Container, Grid, Stack } from '@mui/material';
import './App.css';
import JobCard from './components/JobCard';
import MultiSelectInput from './components/MultiSelectInput';

function App() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" marginBottom={5} marginTop={5}>
        <MultiSelectInput title="Some" values={["this", "that", "some", "value"]} />
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <JobCard />
        </Grid>
        <Grid item xs={4}>
          <JobCard />
        </Grid>
        <Grid item xs={4}>
          <JobCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
