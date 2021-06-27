import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetlistofUsers = () => {

    const [userlist, setUserlist] = useState([])

    useEffect(async () => {

        try {

            const response = await axios.post("http://localhost:8000/public")

            if (response.status === 200) {

                setUserlist([...userlist, response.data.userlist])

                console.log(response.data.userlist)
                console.log(userlist)
            }

            namelist(response.data.userlist);

        } catch (error) {
            console.log("Unable to fetch data from server", error)
        }

    }, []);

    const namelist = (data) => {
        for(let i=0;i<data.length;i++) {
            console.log(data[i]._id)
        }
    }

    return (

        <div>
            <h1>User list</h1>
            
            <ul>
                {
                    userlist.map((elem, index) => {
                        return <li> {elem[index].email} </li>
                    })
                }
            </ul>

        </div>
    )
}

export default GetlistofUsers;