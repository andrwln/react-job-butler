import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import JobListItem from '../components/JobListItem';

const JobsListContainer = styled.div`
  background-color: grey;
  max-width: 1200px;
`;
const JobsListHeaders = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    font-weight: bold;
    border-bottom: 1px solid black;
    width: 20%;
    padding: 5px;
  }
`;

function JobsList({ jobs }) {
  return (
    <JobsListContainer>
      <JobsListHeaders>
        <div>Company Name</div>
        <div>Position Title</div>
        <div>Status</div>
        <div>Edit</div>
      </JobsListHeaders>
      {jobs.map((job, i) => {
        return <JobListItem key={i} job={job} />;
      })}
      <Link href="new">
        <a>Add Job</a>
      </Link>
    </JobsListContainer>
  );
}

export default JobsList;
