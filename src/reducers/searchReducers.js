import * as actions from '../actions/dataActions';

export const initialState = {
  searchField: '',
};

export default function searchResults(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_SEARCH_FIELD:
      return { searchField: action.payload };
    default:
      return state;
  }
}
