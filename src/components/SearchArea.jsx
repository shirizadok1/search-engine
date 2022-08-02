import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./Card";
import { Container, Row, Col } from 'react-bootstrap';
import "./Box.css";

function SearchArea(props) {

    const [photo, setPhoto] = useState("");
    const [clientId, setClientId] = useState("YYYw7oE7qPoGGH0TZb3J-h7stckt87pGkvD3-019_bk#");
    const [answer, setAnswer] = useState([]);
    const [page, setPage] = useState(1);


    function handleChange(event) {
        setPhoto(event.target.value);
    }

    const url =
        "https://api.unsplash.com/search/photos/?query=" +
        photo +
        "&per_page=30&client_id=" +
        clientId +
        "&page=" +
        page;

    function handleClick() {
        axios.get(url).then((response) => {
            console.log(response);
            setAnswer(response.data.results);
        });
    }
    const fetchImages = () => {
        axios.get(url)
            .then((response) => {
                setAnswer([...answer, ...response.data.results]);
            })
            .catch((error) => {
                console.log(error);
            });
        setPage(page + 1);
    };
    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            handleClick();
        }
    };


    return (
        <div className="SearchArea">
                <InputGroup onChange={handleChange} onKeyPress={handleKeypress} className="col-6">
                    <FormControl
                        placeholder="Search Anything!"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
                        <div className="search-icon">
                            <SearchIcon />
                        </div>
                    </Button>

                    <InfiniteScroll
                        dataLength={answer.length}
                        next={fetchImages}
                        hasMore={true}
                    >
                                <div className="grid flex">
                                    {answer.map((photo, index) => (
                                        <div className="box">
                                        <Card
                                            img={photo.urls.small}
                                            key={index} />
                                            </div>
                                    ))}

                                </div>
                    </InfiniteScroll>
                </InputGroup>
            </div>
    );
}

export default SearchArea;