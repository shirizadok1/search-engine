import React, { useState } from "react";
import SearchArea from "./SearchArea";
import Card from "../components/Card";

function Content() {
    const [cards, setCards] = useState([]);


    function handleNewData(data) {
        setCards(data);
        console.log(data);
    }



    return (
        <div>
            <SearchArea
                onSearch={handleNewData}
            />

            
             {cards.map((cardItem) => {
                return (
                    <Card
                        key={cardItem.index}
                        id={cardItem.index}
                        title={cardItem.title}
                        img={cardItem.img}
                    />
                );
            })} 
        </div>
    );
}

export default Content;