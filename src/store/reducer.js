import { ACTION_TYPES } from '../constant';
import { getDirectoryListWithChilds } from './../helper';


const initialState = {
    nodes: [],
    showContents: true,
};

const directoryReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DIRECTORIES: 
      return {
        ...state,
        isLoading: true
      }
    

    case ACTION_TYPES.SET_DIRECTORIES:
      const response =  [...action.payload?.data]
      const nodes = getDirectoryListWithChilds(response);
      return {
        ...state,
        isLoading: false,
        nodes: nodes,
      }


    case ACTION_TYPES.ERROR_FETCH_DIRECTORIES: 
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    

    case ACTION_TYPES.TOGGLE_CONTENT_VISIBILITY: 
      return {
        ...state,
        showContents: !state.showContents,
      };
    

    default: {
      return state;
    }
  }
};

export {
    directoryReducer,
    initialState
};