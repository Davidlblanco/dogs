import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../Hooks/UseForm';
import { TOKEN_POST, USER_GET } from '../../api';

function LoginForm() {
    // const [token, setToken] = useState(' ');
    const username = UseForm();
    const password = UseForm();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            getUser(token)
        }
    }, [])

    async function getUser(token) {
        const { url, options } = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json();
        console.log(json)

    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (username.validate() && password.validate()) {
            const { url, options } = TOKEN_POST({
                username: username.value,
                password: password.value
            })
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
            window.localStorage.setItem('token', json.token)
            getUser(json.token)
        }
    }
    return (
        <section onSubmit={handleSubmit}>
            <h1>Login</h1>
            <form action="">
                <Input label='Username' name='username' type='text' {...username} ></Input>
                <Input label='Password' name='password' type='password'  {...password} ></Input>
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
