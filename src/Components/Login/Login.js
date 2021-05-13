import React from 'react'
import { Route, Routes } from 'react-router'
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

function Login() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginForm />}></Route>
                <Route path='logincreate' element={<LoginCreate />}></Route>
                <Route path='loginpasswordlost' element={<LoginPasswordLost />}></Route>
                <Route path='loginpasswordreset' element={<LoginPasswordReset />}></Route>
            </Routes>
        </div >
    )
}

export default Login
