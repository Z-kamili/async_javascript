const p = Promise.reject(new Error('reason for rejection...'));
p.then(error => console.log(error));