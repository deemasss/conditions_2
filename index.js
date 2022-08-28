function userLogin () {

    let email = prompt('Enter email');

        if (email !== 'admin@test.io') {
            return alert('Incorrect email')    
        } 

    let password = prompt('Enter password')

        if (email === 'admin@test.io' && password !== 'admin1234') {
            return alert('Incorrect password')
        } else if (email === 'admin@test.io' && password === 'admin1234') {
            return alert('Login successful')
        }
}

userLogin();
