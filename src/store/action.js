import { ACTION_TYPES } from './../constant.js';
import { fetchDirectories } from '../service/directory.js';


export const toggleContentVisibility = () => {
  return {
    type: ACTION_TYPES.TOGGLE_CONTENT_VISIBILITY,
  };
};

export const fetchDirectoriesAction = async (dispatch) => {
  dispatch({type: ACTION_TYPES.FETCH_DIRECTORIES})
  try {
    const response = await fetchDirectories();
    dispatch({type: ACTION_TYPES.SET_DIRECTORIES, payload: response})
  } catch (error) {
    dispatch({type: ACTION_TYPES.ERROR_FETCH_DIRECTORIES})
  }
}
