import * as actions from '../actions/dataActions';

export const initialState = {
  data: {},
  loaded: false,
  Errors: false,
};

export default function searchData(state = initialState, action) {
  switch (action.type) {
    case actions.DATA_INFO:
      return { ...state, loaded: true };
    case actions.DATA_INFO_SUCCESS:
      return { data: action.payload, loaded: false, Errors: false };
    case actions.DATA_INFO_FAILURE:
      return { ...state, loaded: false, Errors: true };
    default:
      return state;
  }
}
