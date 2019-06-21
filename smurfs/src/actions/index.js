import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD = 'ADD';
export const DELETE ='DELETE';
export const UPDATE = 'UPDATE';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export const fetch = () => dispatch => {
  dispatch({ type: LOADING});

  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: ERROR})
  });
};

export const deleter = (id) => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({ type: DELETE, payload: res.data})
  });
};

export const add = (name, age, height) => dispatch => {
  const newSmurf = {
    name: name,
    age: age,
    height: height,
  };

  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res => {
    dispatch({ type: ADD, payload: res.data})
  });
};

export const update = (id, name, age, height) => dispatch => {
  const updatedSmurf = {
    name: name,
    age: age, 
    height: height
  };

  axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf)
  .then(res => {
    dispatch({ type: UPDATE, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: ERROR})
  });
};

export const addRating = (id, message) => (dispatch) => {
  const newMessage = {
          message: message,
          img: ''
  };

  axios.get(`http://localhost:3333/smurfs/${id}`)
          .then(res => {
                  const theFriend = res.data;

                  const updateFriend = theFriend.messages.push(newMessage);

                  return axios.put(`http://localhost:3333/smurfs/${id}`, theFriend).then(res => {
                          dispatch({ type: UPDATE_MESSAGES, payload: res.data })
                  });
          });
};
