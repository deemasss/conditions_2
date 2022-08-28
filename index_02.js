function userLogin() {

    let email = prompt('Enter email')

    while (email !== 'admin@test.io') {
        alert('Incorrect email')
        break;
    }

    if (email === 'admin@test.io') {
        let password = prompt('Enter password')
        while (password !== 'admin1234') {
            alert('Incorrect password')
            break;
        } if (password === 'admin1234') {
            return alert('Login successful')
        }
    }
}
       
userLogin();
