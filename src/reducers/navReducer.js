import * as actions from '../actions/dataActions'

export const initialState = {
  detail: 'Report in Nigeria'
}

export default function navDetails (state = initialState, action) {
  switch (action.type) {
    case actions.NAV_DETAIL:
      return {...state}
    default:
      return state
  }
}