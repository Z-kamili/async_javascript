//Asynchronous
console.log('Before');
getUser(1,(user) => {

    getRepositories(user.gitHubUsername,(repos) => {

       getCommits(repo,(commits) => {
        
          
          
       });
    });

});



console.log('After');

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');


function getUser(id,callback){

    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id : id, gitHubUsername: 'zakaria'}); 
    },2000);

}


//Get the repositories
function getRepositories(username,callback){

    setTimeout(() => {

        console.log('Calling GitHub API...');
        callback(['repo1','repo2','repo3']);

    },2000);

}






