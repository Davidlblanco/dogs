import React, { useState } from 'react'

function UserPost() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault();


        fetch('https://dogsapi.origamid.dev/json/api/user',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        username,
                        email,
                        password
                    })
            })
            .then(data => {
                console.log(data)
                return data.json()
            })
            .then(json => {
                console.log(json)
                return json;
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} placeholder='username'></input>
            <input type='email' value={email} onChange={({ target }) => setEmail(target.value)} placeholder='email'></input>
            <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='password'></input>
            <button>Enviar</button>
        </form>
    )
}

export default UserPost
