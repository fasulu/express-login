import React, { useEffect } from 'react';

const Admin = () => {

    // useEffect(async = () => {


    // }, []);

    return (
        <>

            <div className="card-body mp-3 offset-1"> Im in Admin page

                <ol className="list-group list-group-numbered">

                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold badge bg-primary">here nom</div>
                        </div>
                        <span className="rounded-pill mx-3">here prenom</span>
                        <span className="rounded-pill">here age</span>
                    </li>

                </ol>
            </div>

        </>
    )
}

export default Admin;