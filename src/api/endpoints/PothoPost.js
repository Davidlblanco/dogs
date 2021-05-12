import React, { useState } from 'react'

function PhotoPost() {
    const [token, setToken] = useState('')
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')
    const [image, setImage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img', image)
        // formData.append('token', token)
        formData.append('nome', name)
        formData.append('peso', weight)
        formData.append('idade', age)


        fetch('https://dogsapi.origamid.dev/json/api/photo',
            {
                method: 'post',
                headers: { Authorization: 'Bearer' + token },
                body: formData
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
            <input type='text' value={token} onChange={({ target }) => setToken(target.value)} placeholder='token'></input>
            <input type='text' value={name} onChange={({ target }) => setName(target.value)} placeholder='name'></input>
            <input type='text' value={weight} onChange={({ target }) => setWeight(target.value)} placeholder='weight'></input>
            <input type='text' value={age} onChange={({ target }) => setAge(target.value)} placeholder='age'></input>
            <input type='file' onChange={({ target }) => setImage(target.files[0])} ></input>
            <button>Enviar</button>
        </form>
    )
}

export default PhotoPost
