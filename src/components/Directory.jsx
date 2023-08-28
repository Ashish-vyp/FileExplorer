import React, {useMemo} from 'react';
import { FaChevronDown, FaChevronRight, FaSpinner } from "react-icons/fa";
import useDirectoryContext from "../hooks/useDirectory";
import Nodes from "./Nodes";
import { toggleContentVisibility } from '../store/action';
import { getDirectoryListWithChilds } from '../helper';


const DirectoryComponent = () => {
    const {showContents, nodes, dispatch, isLoading} = useDirectoryContext();
    const nodesListWithChild = useMemo(()=>getDirectoryListWithChilds(nodes), [nodes]);
    
    return (
        <section className="container">
        <div className="header">

          <div
            className="title"
            onClick={() => dispatch(toggleContentVisibility())}
          >
            {showContents ? <FaChevronDown /> : <FaChevronRight />}
            <p>Files</p>
          </div>
        </div>
        {showContents ? (
          isLoading ? <div className='loader'><FaSpinner icon="spinner" className="spinner"/></div> :
          <div className="content">
            <Nodes nodes={nodesListWithChild} />
          </div>
        ) : null}
      </section>
    )
};

export default React.memo(DirectoryComponent);