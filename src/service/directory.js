import directories from './../data/directory.json';

const fetchDirectories =function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(directories);
        }, 2000)
    });
}

export {fetchDirectories};
