import * as types from '../actions/';

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return { ... state, loading: true};
    
    case SUCCESS:
        return { ...state, loading: false, smurfs: action.payload,};

    case ERROR:
    return { ...state, loading: false, error: 'NOT FOUND'};
    default: return state;
  }
};

export default reducer;