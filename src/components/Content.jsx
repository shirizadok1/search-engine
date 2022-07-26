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

            {cards.map((item, index) => {
                    console.log(cards)
            
            })};

            
            {/* {cards.map((item, index) => {
                return (
                    <Card
                        key={index}
                        id={index}
                        title={item.title}
                    />
                );
            })} */}
        </div>
    );
}

export default Content;