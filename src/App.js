import { Container, Grid } from '@mui/material';
import './App.css';
import JobCard from './components/JobCard';

function App() {
  return (
    <Container maxWidth="xl">
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
