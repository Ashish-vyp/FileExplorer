import _ from "lodash";

const deepFindNodeById = (id, data) => {
    for (const ele of data) {
      if (ele.id === id) {
        return ele;
      } else if (ele.children) {
        const result = deepFindNodeById(id, ele.children);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };
  


  const getDirectoryListWithChilds = (arr) => {
    const result = [];
  
    for (const item of arr) {
      if (item.parent) {
        const parent = deepFindNodeById(item.parent, result);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(_.cloneDeep(item));
        }
      } else {
        result.push(_.cloneDeep(item));
      }
    };

    return result;
  };
  

export {
    deepFindNodeById,
    getDirectoryListWithChilds
}
