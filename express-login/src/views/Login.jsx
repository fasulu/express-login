import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        console.log("email entered ", email)
        console.log("password entered", password)
    }

    return (

        <div className="card-body mp-3 offset-1">

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-10 mx-1">
                    <input id="staticEmail" className="form-control-plaintext"
                        type="text"
                        placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-10 mx-1">
                    <input id="inputPassword" className="form-control"
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-auto offset-8">
                    <button className="btn btn-primary"
                        type="submit"
                        onClick={login}
                    >Submit</button>
                </div>
            </div>


        </div>


    )

}

export default Login;