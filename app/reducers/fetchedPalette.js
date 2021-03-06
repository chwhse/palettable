import {
  REQUEST_PALETTE, RECEIVE_PALETTE, INVALIDATE_PALETTE, RECEIVE_PALETTE_FAILED
} from '../constants/ActionTypes';

const initialState = {
  fetchFailed: false,
  isFetching: false,
  didInvalidate: false,
  colors: [],
};

export function fetchedPalette(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PALETTE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_PALETTE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        colors: action.colors.map(color => `#${color}`),
      };
    case INVALIDATE_PALETTE:
      return {
        ...state,
        didInvalidate: true,
      };
    case RECEIVE_PALETTE_FAILED:
      return {
        ...state,
        fetchFailed: true,
      };
    default:
      return state;
  }
}
