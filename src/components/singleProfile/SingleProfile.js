import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleProfile.css';

const SingleProfile = () => {
    const { id } = useParams();
    console.log(id);
    const [details, setDetails] = useState({});


    const { name, username, website, phone, email, company, address } = details && details;

    useEffect(() => {
        const url = `https://mocki.io/v1/7e73f3ff-b658-405d-a59e-7baefc654a6a?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data.find(item => item.id == id))
            })
    }, [])

    return (
        <section id="single-Profile">
            <div className="container mt-5">
                <div className="row w-100 shadow justify-content-center">
                    <div className="col-md-10">
                        <div className="images text-center ">
                            <img className="w-50 " src={`https://avatars.dicebear.com/v2/avataaars/${name && name}.svg`} alt="" />
                        </div>
                        <h6 className="py-5">User Name: {username && username}</h6>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>{name && name}</h2>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left">Email: {email && email}</p>
                                <p>Company: {company && company?.name}</p>
                                <p>Address: {address && address?.suite},{address && address?.street},{address && address?.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProfile;