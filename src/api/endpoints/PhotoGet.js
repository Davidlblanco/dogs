import React, { useState } from 'react'

function PhotoGet() {
    const [id, setId] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
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
            <input type='text' value={id} onChange={({ target }) => setId(target.value)}></input>
            <button>Get photo</button>
        </form >

    )
}

export default PhotoGet
