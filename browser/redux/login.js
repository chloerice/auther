import axios from 'axios';

/* -----------------    ACTION(S)     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATOR(S)     ------------------ */
//define method that will be called by the dispatcher (with dispatch(method))
//that will take a user and returns a new state that sets currentUser...


const login = user => ({ type: SET_CURRENT_USER, user })

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return currentUser = action.user

    default:
      return currentUser;
  }
}

/* ------------       DISPATCHER(S)     ------------------ */

export const setCurrentUser = ({email, password}) => dispatch => {
  axios.post('/api/login', {email, password})
       .then(res => dispatch(login({email, password})));
}
