import axios from 'axios';

/* -----------------    ACTION(S)     ------------------ */

const CREATE_NEW_USER = 'CREATE_NEW_USER';


/* ------------   ACTION CREATOR(S)     ------------------ */
//define method that will be called by the dispatcher (with dispatch(method))
//that will take a user and returns a new state that sets new user...


const signup = user => ({ type: CREATE_NEW_USER, user })

/* ------------       REDUCER     ------------------ */

export default function reducer (newUser = {}, action) {
  switch (action.type) {

    case CREATE_NEW_USER:
      return newUser = action.user

    default:
      return newUser;
  }
}

/* ------------       DISPATCHER(S)     ------------------ */

export const setNewUser = ({email, password}) => dispatch => {
  axios.post('/api/signup', {email, password})
       .then(res => dispatch(signup({email, password})));
}
