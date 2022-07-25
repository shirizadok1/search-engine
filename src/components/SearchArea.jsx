import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { ImSearch } from 'react-icons/im';
import Card from "./Card";

function SearchArea() {

    const [searchClick, setSearchClick] = useState("");

    function handleClick(event) {

        const data = [];
        setSearchClick(event.target.value);
        const apiUrl = "https://www.loc.gov/search/?q=" + { searchClick } + "&fo=json";


        const getData = async () => {

            const f1_data = await fetch(apiUrl)
                .then((res) => res.json());
            f1_data.results.map(item => {
                data.push(item)

            });
            renderData(data);
            console.log(data)

            // const card = new Card()
            // cards.push(data)

        };

        getData();

        const renderData = (cards) => {
            return(
                cards.map((data, index) => {
                    return (<Card data={data} key={index}/ >)
                })
            );
        }
        }


    return (
        <div className="SearchArea">
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center"></div>
                <InputGroup className="col-6">
                    <FormControl
                        placeholder="Search Anything!"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                        <ImSearch />
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default SearchArea;