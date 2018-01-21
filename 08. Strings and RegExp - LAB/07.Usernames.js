// Generate username
// Each user name consists of
//      * Everything before '@'
//      * Each first letter of domain
//      * Separated by '.'
function getUsernames(input) {
    let usernames = [];

    input.forEach(e => {
        let user = e.split('@')[0];
        let domain = e.split('@')[1];

        let username = user + '.' + domain.split('.').map(ch => ch[0]).join('');

        usernames.push(username);
    })

    return usernames.join(', ');
}

console.log(getUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));