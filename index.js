console.log('Before');

const user = getUser(1);

console.log('After');

console.log(user);

function getUser(id){

    setTimeout(() => {

        console.log('Reading a user from a database...');
        return { id : id, gitHubUsername: 'zakaria'}
    },2000);

}


