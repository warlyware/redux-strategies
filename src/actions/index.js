import { FETCHING_DATA } from '../constants';
import getPeopleFromApiEndpoint from '../api';

export function fetchData() {
  return {
    type: FETCHING_DATA,
    payload: getPeopleFromApiEndpoint()
  }
}
