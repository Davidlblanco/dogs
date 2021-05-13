import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        username,
                        password
                    })
            })
            .then(data => {
                console.log(data)
                return data.json()
            })
            .then(json => {
                console.log(json)
                setToken(json.token)
                return json;
            })
    }
    return (
        <section onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form action="">
                <Input label='Username' name='username' type='text' ></Input>
                <Input label='Password' name='password' type='password'  ></Input>
                <Button >Login</Button>
                {/* <input type='text' value={username} onChange={({ target }) => setUsername(target.value)}></input>
                <input type='password' value={password} onChange={({ target }) => setPassword(target.value)}></input> */}
                {/* <button>Login</button> */}
            </form>
            <Link to='/login/logincreate'>LoginCreate</Link>
        </section>
    )
}

export default LoginForm
