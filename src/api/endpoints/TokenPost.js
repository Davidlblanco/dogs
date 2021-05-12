import React, { useState } from 'react'

function TokenPost() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
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
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} placeholder='username'></input>
            <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} placeholder='password'></input>
            <button>Enviar</button>
            <p style={{ wordBreak: 'break-all' }}>{token}</p>
        </form>
    )
}

export default TokenPost
