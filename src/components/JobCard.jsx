import { Typography, Box, Button, capitalize } from "@mui/material";
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
  minSalary,
  maxSalary,
}) => {
  return (
    <Card>
      <PostedTime>⌛ Posted 10 days ago</PostedTime>
      <JobTitleContainer>
        <CompanyLogoContainer>
          <CompanyLogo src={logoUrl} alt={title} />
        </CompanyLogoContainer>

        <Box>
          <CompanyName>{companyName}</CompanyName>
          <JobTitle variant="h1">{capitalize(title)}</JobTitle>
          <JobLocation>{capitalize(location)}</JobLocation>
        </Box>
      </JobTitleContainer>

      <EstSalary>
        Estimated Salary: ₹{minSalary} - {maxSalary} LPA ✅
      </EstSalary>

      <Box>
        <AboutCompany>About Company</AboutCompany>

        <Typography fontWeight={600}>About us</Typography>

        <JobDescriptionContainer>
          <JobDescription>
            <Typography>{jobDescription}</Typography>
          </JobDescription>
          <ViewJobButton>
            <Button href={applyLink} sx={{ height: "max-content" }}>
              View job
            </Button>
          </ViewJobButton>
        </JobDescriptionContainer>

        <Box marginBottom={2}>
          <Typography fontWeight={600} color="gray">
            Minimum Experience
          </Typography>
          <Typography>{experienceRequired} Years</Typography>
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
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostedTime = styled(Typography)`
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

const CompanyName = styled(Typography)`
  color: gray;
  font-weight: 600;
`;

const JobTitle = styled(Typography)`
  font-size: 1.5rem;
`;

const JobLocation = styled(Typography)`
  font-size: 0.85rem;
  font-weight: 600;
`;

const EstSalary = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 500;
`;

const AboutCompany = styled(Typography)`
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const JobDescriptionContainer = styled(Box)`
  position: relative;
`;

const JobDescription = styled(Typography)`
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
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 212, 255, 0) 100%
  );
`;

export default JobCard;
