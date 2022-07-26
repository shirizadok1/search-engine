import React from "react";

function Card(props) {

    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{props.title}</p>

                </div>
        </div>
    );

}

export default Card;