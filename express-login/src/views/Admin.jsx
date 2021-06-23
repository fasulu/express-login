import React from 'react';

const Admin = () => {

    return (

        <div className="card-body mp-3 offset-1">

            <ol class="list-group list-group-numbered">

                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold badge bg-primary">here nom</div>
                    </div>
                    <span class="rounded-pill mx-3">here prenom</span>
                    <span class="rounded-pill">here age</span>
                </li>

            </ol>
        </div>
    )
}

export default Admin;