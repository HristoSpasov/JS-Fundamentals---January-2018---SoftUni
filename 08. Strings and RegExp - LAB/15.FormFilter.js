function fillForm(username, email, telephone, input) {
    const usernamePattern = /<![A-Za-z]+!>/g;
    const emailPattern = /<@[A-Za-z]+@>/g;
    const phonePattern = /<\+[A-Za-z]+\+>/g;

    for (let str of input) {
        str = str.replace(usernamePattern, username);
        str = str.replace(emailPattern, email);
        str = str.replace(phonePattern, telephone);

        console.log(str);
    }
}

fillForm(['Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    'Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);