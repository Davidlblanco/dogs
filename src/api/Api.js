import React from 'react'
import PhotoGet from './endpoints/PhotoGet'
import PothoPost from './endpoints/PothoPost'
import TokenPost from './endpoints/TokenPost'
import UserPost from './endpoints/UserPost'

function Api() {
    return (
        <div><h2>User Post</h2>
            <UserPost />
            <h2>Token Post</h2>
            <TokenPost />
            <h2>Photo Post</h2>
            <PothoPost />
            <h2>photoGet</h2>
            <PhotoGet />
        </div>
    )
}

export default Api
