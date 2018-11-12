import { actionTypes } from './actions';

export const initialState = {
  jobs: [
    {
      id: 1,
      company_name: 'Google',
      position_title: 'Software Engineer II',
      current_status: 'Applied'
    },
    {
      id: 2,
      company_name: 'Apple',
      position_title: 'CAO',
      current_status: 'Interview Scheduled'
    },
    {
      id: 1,
      company_name: 'Facebook',
      position_title: 'CEO',
      current_status: 'Offer Received'
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.SAVE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };

    // case actionTypes.INCREMENT:
    //   return {
    //     ...state,
    //     ...{count: state.count + 1}
    //   }

    // case actionTypes.DECREMENT:
    //   return {
    //     ...state,
    //     ...{count: state.count - 1}
    //   }

    // case actionTypes.RESET:
    //   return {
    //     ...state,
    //     ...{count: exampleInitialState.count}
    //   }

    // case actionTypes.LOAD_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     ...{placeholderData: action.data}
    //   }

    // case actionTypes.TICK_CLOCK:
    //   return {
    //     ...state,
    //     ...{lastUpdate: action.ts, light: !!action.light}
    //   }

    default:
      return state;
  }
}

export default reducer;
