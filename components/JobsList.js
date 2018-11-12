import React, { Component } from 'react';
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
    width: 20%;
    padding: 5px;
  }
`;

function JobsList({ jobs }) {
  console.log('props: ', jobs);
  return (
    <JobsListContainer>
      <JobsListHeaders>
        <div>Company Name</div>
        <div>Position Title</div>
        <div>Status</div>
      </JobsListHeaders>
      {jobs.map((job, i) => {
        return <JobListItem key={i} job={job} />;
      })}
      <button>Add Job</button>
    </JobsListContainer>
  );
}

export default JobsList;
