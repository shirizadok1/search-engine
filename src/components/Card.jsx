import React from "react";

function Card(props) {

    return (
        <div className="card item-card card-block">

            <div className="card-body">
                <p className="card-text">{props.title}</p>
                <p className="card-img"><img className="card-img-top" src={props.img} alt="Card image cap" /></p>

            </div>
        </div>
    );

}

export default Card;