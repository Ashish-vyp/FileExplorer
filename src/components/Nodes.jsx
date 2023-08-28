import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import FileIcon from './FileIcon';
import Controls from './Controls';
import { editNodeNameAction } from '../store/action';
import useDirectoryContext from '../hooks/useDirectory';




const getIconForDirectoryOrFile = (isDir, isOpen, name) => {
  if (!isDir) {
    return {
      icon: FileIcon, props: { name }
    };
  }

  return {
    icon: isOpen ? FaChevronDown : FaChevronRight
  };
};





const Node = ({ isDir, name, id, children, level }) => {
  const { dispatch } = useDirectoryContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const config = getIconForDirectoryOrFile(isDir, isOpen, name);
  const Icon = config.icon;
  const iconProps = config.props;

  const handleTitleClick = () => {
    if (isDir) {
      setIsOpen(!isOpen);
    }
  };

  const handleEditClick = () => {
    setIsEdit((isEdit) => !isEdit)
  };

  const handleDelete = () => {
    console.log(id, 'delete')
  };

  const handleEdit = (e) => {
    const payload = {
      id,
      newName: e.target.value
    }
    dispatch(editNodeNameAction(payload))
  };
  
  const onBlur = (e) => {
    setIsEdit((isEdit)=>!isEdit);
  };

  return (
    <div>
      <div className="branch" style={{ paddingLeft: `calc(${level} * 12px)` }}>
        <div className="entry">

          {
            isEdit ?
              <input
                value={name}
                onChange={handleEdit}
                onBlur={onBlur}
                type="text"
                autoFocus
                className='editNodeInput'
              /> :
              <div className="title" onClick={handleTitleClick}>
                <Icon {...iconProps} />
                <p className={isOpen ? "active" : ''}>{name}</p>
              </div>
          }
          <div className='controls-container'>
            <Controls handleDelete={handleDelete} handleEditClick={handleEditClick} />
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
