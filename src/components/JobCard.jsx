import { Typography, Box, Button } from "@mui/material";
import React from "react";

import styled from "styled-components";

const JobCard = ({
  title,
  companyName,
  location,
  jobDescription,
  experienceRequired,
  applyLink,
  logoUrl,
}) => {
  return (
    <Card>
      <PostedTime>⌛ Posted 10 days ago</PostedTime>
      <JobTitleContainer>
        <CompanyLogoContainer>
          <CompanyLogo
            src={"https://logo.clearbit.com/fampay.in"}
            alt="companyName"
          />
        </CompanyLogoContainer>

        <Box>
          <CompanyName>fampay</CompanyName>
          <JobTitle>Backend Engineer</JobTitle>
          <JobLocation>Bangalore</JobLocation>
        </Box>
      </JobTitleContainer>

      <EstSalary>Estimated Salary: $6000 - $8000 LPA ✅</EstSalary>

      <Box>
        <AboutCompany>About Company</AboutCompany>

        <Typography fontWeight={600}>About us</Typography>

        <JobDescriptionContainer>
          <JobDescription>
            <Typography>
              This is a sample job and you must have displayed it to understand
              that its not just some random lorem ipsum text but something which
              was manually written. Oh well, if random text is what you were
              looking for then here it is: Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages and now in this
              assignment.
            </Typography>
          </JobDescription>
          <ViewJobButton>
            <Button>View job</Button>
          </ViewJobButton>
        </JobDescriptionContainer>

        <Box sx={{ marginBottom: "1rem" }}>
          <Typography fontWeight={600} color="gray">
            Minimum Experience
          </Typography>
          <Typography>2 Years</Typography>
        </Box>

        <Button
          fullWidth
          sx={{
            backgroundColor: "#55efc4",
            color: "black",
            fontWeight: 600,
            marginBottom: "0.5rem",
          }}
        >
          ⚡ Easy Apply
        </Button>

        <Button
          fullWidth
          sx={{
            backgroundColor: "#4943da",
            color: "white",
            fontWeight: 600,
          }}
        >
          ⚡ Unlock referal asks
        </Button>
      </Box>
    </Card>
  );
};

const Card = styled(Box)`
  border: 1px solid gray;
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const PostedTime = styled(Box)`
  padding: 0.25rem 0.6rem;
  font-size: 0.8rem;
  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.57);
  border-radius: 15px;
  max-width: fit-content;
`;

const JobTitleContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
`;

const CompanyLogoContainer = styled(Box)`
  max-width: 65px;
`;

const CompanyLogo = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CompanyName = styled(Box)`
  color: gray;
  font-weight: 600;
`;

const JobTitle = styled(Box)`
  font-size: 1.5rem;
  margin: 0.25rem 0;
`;

const JobLocation = styled(Box)`
  font-size: 0.85rem;
  font-weight: 600;
`;

const EstSalary = styled(Box)`
  font-size: 1.25rem;
  font-weight: 500;
`;

const AboutCompany = styled(Box)`
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const JobDescriptionContainer = styled(Box)`
  position: relative;
`;

const JobDescription = styled(Box)`
  max-height: 200px;
  overflow: hidden;
`;

const ViewJobButton = styled(Box)`
  position: absolute;
  height: 80px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 212, 255, 0) 100%
  );
`;

export default JobCard;
