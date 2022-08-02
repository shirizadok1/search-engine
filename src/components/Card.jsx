import React from "react";
import "./Box.css";


function Card(props) {

    return (
        <div className="card">

            <div className="card-body">
                <p className="card-text">{props.title}</p>
                <p className="card-img"><img className="card-img-class" src={props.img} alt="Card image cap" /></p>

            </div>
        </div>
    );

}

export default Card;