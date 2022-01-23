import * as ActionTypes from '../contstants/actionTypes';

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL: {
      return action.payload;
    }
    case ActionTypes.CREATE: {
      return [...posts, action.payload];
    }
    case ActionTypes.LIKE:
    case ActionTypes.UPDATE: {
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case ActionTypes.DELETE: {
      return posts.filter((post) => post._id !== action.payload);
    }
    default:
      return posts;
  }
};
export default postsReducer;
