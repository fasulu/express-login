import React, { useState, history } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorList, setErrorList] = useState([])

    let history = useHistory();


    const login = async () => {

        const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
        const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const isEmailValid = emailPattern.test(email);
        const isPasswordValid = passwordPattern.test(password);


        if (!isEmailValid) {

            setErrorList([...errorList, "Invalid email"]);
            console.log("Is email valid ", isEmailValid)
            setEmail("")

        }
        if (!isPasswordValid) {

            setErrorList([...errorList, "Invalid password"])
            console.log("Is password valid", isPasswordValid)
            setPassword("")
        }

        console.log("errorList", errorList)
        console.log("email entered ", email)
        console.log("password entered", password)

        const loginUser = {
            email: email,
            password: password
        }

        try {

            const response = await axios.post("http://localhost:8000/login", loginUser)

            const validToken = response.data.validToken;    // picking token from the response
            const expires = response.data.tokenExpire;    // picking userID from the response

            // console.log("Response from backend", response);
            console.log("response.data.userDetail._id", response.data.userDetail._id)
            console.log("response.data.validToken", validToken)
            console.log("response.data.expiresIn", expires)

            window.localStorage.setItem("token", validToken);
            window.localStorage.setItem("expiresIn", expires);

            history.push("/admin");

        } catch (error) {
            console.error("Error while verifying your information", error)
        }
    }

    return (
        <>
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
        </>
    )
}

export default Login;