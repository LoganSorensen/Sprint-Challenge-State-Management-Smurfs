import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  smurfs: null,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
