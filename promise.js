const p = new Promise((resolve,reject)=>{

    //Kick off some async work
    //...
    resolve(1);
    // reject(new Error('message'));


});

p.then(result => console.log('Result',result));