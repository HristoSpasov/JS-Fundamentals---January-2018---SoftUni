function isEmailValid(email) {
    return email.match(/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g) ? 'Valid' : 'Invalid';
}

console.log(isEmailValid('valid@email.bg'));
console.log(isEmailValid('invalid@emai1.bg'));