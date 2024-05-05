import {
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import "./App.css";
import JobCard from "./components/JobCard";
import MultiSelectInput from "./components/MultiSelectInput";
import { useJobsFetcher } from "./hooks/useJobsFetcher";
import { useEffect, useState } from "react";

import CancelIcon from "@mui/icons-material/Cancel";

function App() {
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const { jobs, loading, totalCount } = useJobsFetcher(offset, limit);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  //Filters
  const [minExp, setMinExp] = useState(null);
  const [location, setLocation] = useState([]);
  const [workMode, setWorkMode] = useState([]);
  const [roles, setRoles] = useState([]);
  const [minBasePay, setMinBasePay] = useState(null);
  const [companyName, setCompanyName] = useState('')


  const handleCompanyName = (e) => {
    if (e.target.value === "") setFilteredJobs(jobs)
    setCompanyName(e.target.value);
    setFilteredJobs((prev) => prev.filter((job) => job.companyName.toLowerCase().includes(e.target.value)))
  }

  const applyFilters = () => {
    console.log("I got called");
    const filtered = jobs.filter((job) => {
      const exp = minExp === null || job.minExp >= minExp;
      const locationCheck =
        location.length === 0 || location.includes(job.location);
      const workModeCheck =
        workMode.length === 0 || workMode.includes(job.location);
      const rolesCheck = roles.length === 0 || roles.includes(job.jobRole);
      const minBasePayCheck =
        minBasePay === null || minBasePay <= job.minJdSalary;

      return (
        exp && locationCheck && workModeCheck && rolesCheck && minBasePayCheck
      );
    });

    setFilteredJobs(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [minExp, location, workMode, roles, minBasePay, jobs]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
        jobs.length < totalCount
      ) {
        setOffset((prevOffset) => prevOffset + 10);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (
          window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
          jobs.length < totalCount
        ) {
          setOffset((prevOffset) => prevOffset + 10);
        }
      });
    };
  }, [jobs, totalCount]);

  return (
    <Container maxWidth="xl">
      <Stack direction="row" marginBottom={5} marginTop={5} flexWrap="wrap">
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Min. Experience</InputLabel>
          <Select
            onChange={(e) => setMinExp(e.target.value)}
            input={<OutlinedInput label="Min. Experience" />}
            name="Min Experience"
            value={minExp}
            renderValue={(selected) => (
              <Chip
                sx={{ fontSize: "0.75rem", height: 20 }}
                label={selected}
                onDelete={() => setMinExp(null)}
                deleteIcon={
                  <CancelIcon
                    sx={{ width: 15 }}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                }
              />
            )}
          >
            {[...Array(11).keys()].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <MultiSelectInput
          title="Location"
          values={[
            "Bangalore",
            "Chennai",
            "Delhi",
            "Kolkata",
            "Mumbai",
            "Indore",
            "Noida",
          ]}
          selectedValues={location}
          setSelectedValues={setLocation}
        />

        <MultiSelectInput
          title="Remote/On-Site"
          values={["Remote", "On-Site", "Hybrid"]}
          selectedValues={workMode}
          setSelectedValues={setWorkMode}
        />

        <MultiSelectInput
          title="Role"
          values={[
            "Frontend",
            "Backend",
            "Fullstack",
            "Analyst",
            "Integrations",
            "System Engineer",
          ]}
          selectedValues={roles}
          setSelectedValues={setRoles}
        />

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Min. Base Pay</InputLabel>
          <Select
            onChange={(e) => setMinBasePay(e.target.value)}
            input={<OutlinedInput label="Min. Base Pay" />}
            name="Min Base Pay"
            value={minBasePay}
            renderValue={(selected) => (
              <Chip
                sx={{ fontSize: "0.75rem", height: 20 }}
                label={selected}
                onDelete={() => setMinBasePay(null)}
                deleteIcon={
                  <CancelIcon
                    sx={{ width: 15 }}
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                }
              />
            )}
          >
            {[...Array(8).keys()].map((value) => (
              <MenuItem key={value * 10} value={value * 10}>
                {value * 10}L
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <OutlinedInput type="text" placeholder="Company Name" value={companyName} onChange={handleCompanyName} />
        </FormControl>
      </Stack>

      <Grid container spacing={4}>
        {filteredJobs.map((job, index) => (
          <Grid key={index} item xs={4}>
            <JobCard
              title={job.jobRole}
              companyName={job.companyName}
              experienceRequired={job.minExp}
              jobDescription={job.jobDetailsFromCompany}
              location={job.location}
              logoUrl={job.logoUrl}
              key={job.jdUid}
              applyLink={job.jdLink}
              minSalary={job.minJdSalary || 0}
              maxSalary={job.maxJdSalary || 0}
            />
          </Grid>
        ))}
      </Grid>

      {loading && (
        <Stack
          direction="row"
          sx={{ width: "100%", padding: "2rem 0", justifyContent: "center" }}
        >
          <Typography>Hang on! Getting more jobs...</Typography>
        </Stack>
      )}
    </Container>
  );
}

export default App;
