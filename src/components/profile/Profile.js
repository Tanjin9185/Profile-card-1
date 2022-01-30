import React, { useEffect, useState } from 'react';
import './Profile.css';
import image from '../../image/Tanjin.jpg'

import { useHistory } from 'react-router';
import Card from '../card/Card';


const Profile = () => {


    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = `https://mocki.io/v1/7e73f3ff-b658-405d-a59e-7baefc654a6a`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            }
            )
    }, [])
    const pp = users;
    console.log(pp[1], "hjh");

    const history = useHistory();
    const showDetails = id => {
        const url = `/users/${id}`;
        history.push(url);
    }


    return (
        <section id="Profile">
            <div className="container my-5 py-5">
                <div className="row justify-content-center">

                    {
                        users.map((user, index) => (


                            <div className="col-lg-3 col-md-6 mb-5">
                                <Card user={user} key={index} showDetails={showDetails}></Card>
                            </div>
                        )).slice(0, 9)
                    }

                </div>
            </div>
        </section >
    );
};

export default Profile;