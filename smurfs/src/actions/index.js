/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADD = 'ADD';
export const DELETE ='DELETE';
export const UPDATE = 'UPDATE';

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
    dispatch({ type: DELETE, payload: res.date})
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
    dispatch({ type: add, payload: res.data})
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
  });
};
