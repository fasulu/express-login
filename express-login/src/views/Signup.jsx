import React, { useState } from 'react';
import axios from 'axios'
import moment from 'moment'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [role, setRole] = useState("");
    const [errorlist, setErrorlist] = useState([]);

    const signup = async () => {

        const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
        const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        const namePattern = /[a-z]{4}/;
        const datePattern = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/; // accepts only dd/MM/yyyy from 1901 to 2099 years
        const rolePattern = /[[\badmin\b][\bemployee\b]/;

        const isEmailValid = emailPattern.test(email);
        const isPasswordValid = passwordPattern.test(password2);
        const isFirstnameValid = namePattern.test(firstname);
        const isSurnameValid = namePattern.test(surname);
        const isDateValid = datePattern.test(dateofbirth);
        const isRoleValid = rolePattern.test(role);

        setErrorlist([""]);     // clear errorList before processing input values

        console.log("useremail in state", email, isEmailValid);
        console.log("password1 in state", password1, isPasswordValid);
        console.log("password2 in state", password2, isPasswordValid);
        console.log("prenom in state", firstname, isFirstnameValid);
        console.log("nom in state", surname, isSurnameValid);
        console.log("dateofbirth in state", dateofbirth, isDateValid);
        console.log("role in state", role, isRoleValid);

        if(!isEmailValid){
            setErrorlist([...errorlist, "Invalid email format"]);
            console.log("Invalid email format", errorlist)
        }

        const newUser = {
            email: email.toLowerCase(),
            password: password2,
            firstname: firstname.toLowerCase(),
            surname: surname.toLowerCase(),
            dateofbirth: dateofbirth,
            role: role.toLowerCase()
        }

        const verifyBothPwd = password1 === password2

        // console.log(verifyBothPwd)

        if (verifyBothPwd) {

            try {

                console.log("both password match")

                const response = await axios.post("http://localhost:8000/signup", newUser)

                console.log(response.data.message)

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
                <label className="col-sm-3 col-form-label">Role</label>
                <div className="col-sm-10 mx-1">
                    <input className="form-control"
                        type="text"
                        placeholder="Enter Role"
                        onChange={(e) => setRole(e.target.value)} />
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
                        onClick={signup}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;