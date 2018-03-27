import { FETCHING_DATA_PENDING, FETCHING_DATA_FULFILLED, FETCHING_DATA_REJECTED } from '../constants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA_PENDING:
      console.log('fetching');
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_FULFILLED:
      console.log('fetched', action);
      return {
        ...state,
        dataFetched: true,
        isFetching: false,
        data: action.payload,
      }
    case FETCHING_DATA_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
