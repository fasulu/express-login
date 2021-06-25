import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetlistofUsers = () => {

    const [userlist, setUserlist] = useState([])

    useEffect(async () => {
            
            const response = await axios.post("http://localhost:8000/public")
    
            setUserlist(response.data.nameList)
            console.log(userlist)

    }, []);

    return (

        <div>
            <h1>User list</h1>
            <ul>
                {
                    userlist.map((elem) => {
                        return <li>{elem.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default GetlistofUsers;