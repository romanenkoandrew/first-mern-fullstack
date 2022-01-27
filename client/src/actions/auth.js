import * as api from '../api';
import * as ActionsType from '../contstants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: ActionsType.AUTH, data });
    navigate('/');
  } catch (e) {
    console.log(e.message);
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: ActionsType.AUTH, data });
    navigate('/');
  } catch (e) {
    console.log(e.message);
  }
};
