import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      console.log('fetching');
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      console.log('fetched');
      return {
        ...state,
        dataFetched: true,
        isFetching: false,
        data: action.data,
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
