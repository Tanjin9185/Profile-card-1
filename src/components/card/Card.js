import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Crad.css'
const Card = ({ user, showDetails }) => {

    const [like, setLike] = useState(false);
    return (
        <div className="card text-center main-card h-100">
            <div className="images">
                <img className="card-img-top" src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg`} alt="" />
            </div>
            <div className="card-body pe-2">

                <h5 className="card-title profile-name" onClick={() => showDetails(user.id)} data-toggle="tooltip" data-placement="bottom" title="See Details">{user.name}</h5>
                <div className="d-flex">
                    <span><i className="far fa-envelope"></i></span>  <a href={`mailto:${user.email}`} className="card-text ms-2">{user.email}</a>
                </div>
                <div className="d-flex">
                    <span><i className="fas fa-phone"></i></span>  <a href={`tel:${user.phone}`} className="card-text ms-2">{user.phone}</a>
                </div>
                <div className="d-flex">
                    <span><i className="fas fa-globe"></i></span>  <Link to={`http://${user.website}`} className="card-text ms-2">{user.website}/</Link>
                </div>
            </div>
            <div class="card-footer footer-top">
                <div className="d-flex">
                    <span className="pe-2" onClick={() => { setLike(!like) }}>
                        {
                            like ? <i className="fas fa-heart like-icon"></i> : <i className="far fa-heart like-icon"></i>
                        }
                    </span>
                    <span className="px-4"><i className="far fa-edit"></i></span>
                    <span className="ps-3"><i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Card;