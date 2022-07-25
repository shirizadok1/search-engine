import React from "react";

function Card(props) {








    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                    <p class="card-text">{props.title}</p>

                </div>
        </div>
    );

}

export default Card;