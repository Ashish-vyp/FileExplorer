import { FaFile } from 'react-icons/fa';
import { FileIcon, defaultStyles } from 'react-file-icon';

const GetIconForFileType = ({name}) => {
    let icon = FaFile;
    const extension = name.split('.')[1]
    if(extension){
      icon = <FileIcon extension={extension} {...defaultStyles[extension]} size="12px" />;
    }
    return icon;
  };

  export default GetIconForFileType;