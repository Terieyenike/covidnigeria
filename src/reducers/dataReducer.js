import * as actions from '../actions/dataActions';

export const initialState = {
  results: [],
  loading: false,
  hasErrors: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_INFO:
      return { ...state, loading: true };
    case actions.GET_INFO_SUCCESS:
      return { results: action.payload, loading: false, hasErrors: false };
    case actions.GET_INFO_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
