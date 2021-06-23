import React from 'react';

const Login = () => {

    return (

        <div className="card-body mp-3 offset-1">

            <div className="mb-3 row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10 mx-1">
                    <input type="text" readonly className="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10 mx-1">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" />
                </div>
            </div>
            <div className="mb-3 row">
                <div class="col-auto offset-8">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>


        </div>


    )

}

export default Login;