export const GET_INFO = 'GET_INFO';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAILURE = 'GET_INFO_FAILURE';
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const DATA_INFO = 'DATA_INFO';
export const DATA_INFO_SUCCESS = 'DATA_INFO_SUCCESS';
export const DATA_INFO_FAILURE = 'DATA_INFO_FAILURE';

export const getInfo = () => ({
  type: GET_INFO,
});

export const getInfoSuccess = (results) => ({
  type: GET_INFO_SUCCESS,
  payload: results,
});

export const getInfoFailure = () => ({
  type: GET_INFO_FAILURE,
});

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const getData = () => ({
  type: DATA_INFO,
});

export const getDataSuccess = (data) => ({
  type: DATA_INFO_SUCCESS,
  payload: data,
});

export const getDataFailure = () => ({
  type: DATA_INFO_FAILURE,
});

export function fetchResults() {
  return async (dispatch) => {
    dispatch(getInfo());

    try {
      const res = await fetch('https://covidnigeria.herokuapp.com/api');
      const data = await res.json();
      dispatch(getInfoSuccess(data.data.states));
    } catch (error) {
      dispatch(getInfoFailure());
    }
  };
}

export function fetchData() {
  return async (dispatch) => {
    dispatch(getData());

    try {
      const res = await fetch('https://covidnigeria.herokuapp.com/api');
      const data = await res.json();
      dispatch(getDataSuccess(data.data));
    } catch (error) {
      dispatch(getDataFailure());
    }
  };
}
