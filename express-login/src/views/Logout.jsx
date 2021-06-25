import React, {  } from 'react';

const Logout = () => {

    if(localStorage.length >= 0) {
        window.localStorage.clear("token");
    }

    return (

        <div>

            <h1>You are successfully logged out</h1>
        </div>

    )
}

export default Logout;