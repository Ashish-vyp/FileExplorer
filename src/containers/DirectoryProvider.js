import React, { useReducer, useRef, useMemo, useEffect } from "react";
import DirectoryContext from "../contexts/DirectoryContext";
import {directoryReducer, initialState} from '../store/reducer';
import { fetchDirectoriesAction } from "../store/action";

const DirectoryProvider = (props) => {
    const [state, dispatch] = useReducer(directoryReducer, initialState);
    const initialRef = useRef(true);

    useEffect(()=>{
        if (initialRef.current) {
            fetchDirectoriesAction(dispatch);
            initialRef.current = false;
        }
    },[])

    const memoizedState = useMemo(()=>{
        return {...state, dispatch};
    },[state])
    
    return <DirectoryContext.Provider value={memoizedState}>{props.children}</DirectoryContext.Provider>
};

export default React.memo(DirectoryProvider);