import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import FileIcon from './FileIcon';


const getIconForDirectoryOrFile = (isDir, isOpen, name) => {
  if (!isDir) {
    return {
      icon: FileIcon, props:{name}
    };
  }

  return {
    icon: isOpen ? FaChevronDown : FaChevronRight
  };
};





const Node = ({ isDir, name, id, children, level  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const config = getIconForDirectoryOrFile(isDir, isOpen, name);
  const Icon = config.icon;
  const iconProps = config.props;

  const handleTitleClick = () => {
    if (isDir) {
      setIsOpen(!isOpen);
    }

  };

  return (
    <div>
      <div className="branch" style={{ paddingLeft: `calc(${level} * 12px)` }}>
        <div className="entry">
          <div className="title" onClick={handleTitleClick}>
            <Icon {...iconProps}/><p className={isOpen ? "active" : ''}>{name}</p>
          </div>
        </div>
      </div>
      {children && children.length && isOpen ? (
        <div className="branch_leaf">
          <Nodes nodes={children} level={level + 1} />
        </div>
      ) : null}
    </div>
  );
};

const Nodes = ({ nodes, level = 0 }) => {

  return (
    <div className="nodes">
      {nodes.map((node) => {
        return <Node key={node.id} {...node} level={level} />;
      })}
    </div>
  );
};

export default Nodes;
