import * as types from '../actions/';

const initialState = {
  smurfs: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING:
      return { ... state, loading: true};
    
    case types.SUCCESS:
        return { ...state, loading: false, smurfs: action.payload,};

    case types.ERROR:
    return { ...state, loading: false, error: 'NOT FOUND'};

    case types.ADD:
    return { ...state, smurfs: action.payload };

    case types.DELETE:
    return { ...state, smurfs: action.payload };

    case types.UPDATE:
    return { ...state, smurfs: action.payload };
    default: return state;
  }
};

export default reducer;