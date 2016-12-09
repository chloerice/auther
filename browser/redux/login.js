import axios from 'axios';

/* -----------------    ACTION(S)     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER';


/* ------------   ACTION CREATOR(S)     ------------------ */
//define method that will be called by the dispatcher (with dispatch(method))
//that will take a user and returns a new state that sets currentUser...



// const init  = users => ({ type: INITIALIZE, users })
// const create = user  => ({ type: CREATE, user })
// const remove = id    => ({ type: REMOVE, id })
// const update = user  => ({ type: UPDATE, user })


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

export const setCurrentUser = (e) => dispatch => {
  axios.post('/api/users/login', {email, password})
       .then(res => dispatch((res.data)));
}
