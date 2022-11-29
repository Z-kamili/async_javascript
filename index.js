console.log('Before');
getUser(1,(user) => {
     getRepositories(user.gitHubUsername,(repos) => {
         getCommits(repos[0],(commits) => {
            console.log(commits);
         })
     })
});

getUser(1).then(user => getRepositories(user.gitHubUsername))
           .then(repos => getCommits(repos[0]))
           .then(commits => console.log('Commits',commits))
           .catch(err => console.log('Error',err.message));

console.log('After');


function getUser(id,callback) {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        console.log('Reading a user from a database...');
        // callback({ id : id, gitHubUsername: 'zakaria'}); 
       },2000);
    });
}
// getUser(1,getRepositories);
function getRepositories(username){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            callback(['repo1','repo2','repo3']);
          },2000);
    });

}


function getCommits(repo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          },2000);
    }); 

}


// Synchronous
// console.log('Before');
// const user = getUser(1);
// const repos = getRepositories(user.gitHubUsername);
// const commits = getCommits(repos[0]);
// console.log('After');


//Get the repositories
// function getRepositories(username,callback){

//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         resolve(['repo1','repo2','repo3']);
//     },2000);

// }






