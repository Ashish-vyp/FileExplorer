import { ACTION_TYPES } from '../constant';

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
      const nodes = response;
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

    case ACTION_TYPES.EDIT_NODE: 
      const {id, newName} = action.payload;
      const updatedNodes = state.nodes.map(node=>{
        if(node.id === id){
          node.name = newName
        };
        return node;
      })
      return {
        ...state,
        nodes : updatedNodes
    }
    

    default: {
      return state;
    }
  }
};

export {
    directoryReducer,
    initialState
};