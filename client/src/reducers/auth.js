import * as ActionTypes from '../contstants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH: {
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    }
    case ActionTypes.LOGOUT: {
      localStorage.clear();
      return { ...state, authData: null };
    }
    default:
      return state;
  }
};

export default authReducer;
