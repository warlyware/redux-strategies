import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';
import getPeopleFromApiEndpoint from '../api';

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeopleFromApiEndpoint().then((people) => {
      dispatch(getDataSuccess(people));
    }).catch((error) => {
      console.error(error);
    })

  }
}
