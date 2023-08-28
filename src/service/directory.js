import directories from './../data/directory.json';

const fetchDirectories = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(directories);
        }, 1000)
    });
};


const editNodeName = (id, newName) => {
    return new Promise((resolve, reject)=>{
    //   api call to be added later for editing node name
    })
}

export {fetchDirectories, editNodeName};
