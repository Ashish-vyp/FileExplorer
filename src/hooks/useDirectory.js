import { useContext } from "react";
import DirectoryContext from "../contexts/DirectoryContext";


const useDirectoryContext = () => {
    const directoryContext = useContext(DirectoryContext);
    return directoryContext;
};

export default useDirectoryContext;