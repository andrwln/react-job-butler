export const actionTypes = {
  SAVE_JOB: 'SAVE_JOB'
};

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  };
}

export function saveJob({ job }) {
  return { type: actionTypes.SAVE_JOB, payload: job };
}
