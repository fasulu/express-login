import React, { useState } from 'react';
import axios from 'axios'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");

    const signup = async () => {

        console.log("useremail in state", email);
        console.log("password1 in state", password1);
        console.log("password2 in state", password2);
        console.log("prenom in state", firstname);
        console.log("nom in state", surname);
        console.log("dateofbirth in state", dateofbirth);

        const verifyBothPwd = password1 === password2

        // console.log(verifyBothPwd)

        if (verifyBothPwd) {

            try {

                console.log("both password match")

                const response = await axios.post("http://localhost:8000/auth/signup", email, password2, firstname, surname, dateofbirth)

                console.log(response)

            } catch (error) {
                console.error("Error while posting data", error)
            }

        } else {
            console.log("Both passwords are not same")
            setPassword1("");
            setPassword2("");
        }
    }

    return (

        <div className="card-body mp-3 offset-1">

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control-plaintext"
                        type="text"
                        placeholder="email@example.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">First name</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="text"
                        placeholder="Enter First Name"
                        onChange={(e) => setFirstname(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Surname</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="text"
                        placeholder="Enter Surname"
                        onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Date Of Birth</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="text"
                        placeholder="Enter Date of Birth"
                        onChange={(e) => setDateofbirth(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword1(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Confirm Password</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="password"
                        placeholder="Re-enter Password"
                        onChange={(e) => setPassword2(e.target.value)} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-auto offset-8">
                    <button className="btn btn-primary"
                        type="submit"
                        onClick={signup} >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;