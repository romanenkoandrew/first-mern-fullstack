import * as api from '../api';
import * as ActionsType from '../contstants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: ActionsType.FETCH_ALL, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: ActionsType.CREATE, payload: data });
  } catch (e) {
    console.log(e.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: ActionsType.UPDATE, payload: data });
  } catch (e) {
    console.log(e);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: ActionsType.DELETE, payload: id });
  } catch (e) {
    console.log(e);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: ActionsType.LIKE, payload: data });
  } catch (e) {
    console.log(e);
  }
};
