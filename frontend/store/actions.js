export const actionTypes = {
  SAVE_JOB: 'SAVE_JOB',
  SET_JOBS: 'SET_JOBS'
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function setJobsList({ jobs }) {
  return { type: actionTypes.SET_JOBS, payload: jobs };
}

export function saveJob({ job }) {
  return { type: actionTypes.SAVE_JOB, payload: job };
}
