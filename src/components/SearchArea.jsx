import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "./Card"
import { Container, Row, Col } from "react-bootstrap"


function SearchArea(props) {
    const [photo, setPhoto] = useState("")
    const [clientId, setClientId] = useState(
        "YYYw7oE7qPoGGH0TZb3J-h7stckt87pGkvD3-019_bk#"
    )
    const [answer, setAnswer] = useState([])
    const [page, setPage] = useState(1)

    function handleChange(event) {
        setPhoto(event.target.value)
    }

    const url =
        "https://api.unsplash.com/search/photos/?query=" +
        photo +
        "&per_page=30&client_id=" +
        clientId +
        "&page=" +
        page

    function handleClick() {
        axios.get(url).then((response) => {
            console.log(response)
            setAnswer(response.data.results)
        })
    }
    const fetchImages = () => {
        axios
            .get(url)
            .then((response) => {
                setAnswer([...answer, ...response.data.results])
            })
            .catch((error) => {
                console.log(error)
            })
        setPage(page + 1)
    }
    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            handleClick()
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="justify-content-center">
                    <Row className="mt-4">
                        <Col md={2}></Col>
                        <InputGroup
                            onChange={handleChange}
                            onKeyPress={handleKeypress}
                            className="col-8"
                        >
                            <div className="d-flex align-items-center justify-content-center w-100">
                                <FormControl
                                    placeholder="Search Anything!"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    variant="primary"
                                    id="button-addon2"
                                    onClick={handleClick}
                                    style={{ width: "150px", height: "42px" }}
                                >
                                    <div className="search-icon">
                                        {/* <SearchIcon /> */}
                                    </div>
                                </Button>
                            </div>
                        </InputGroup>
                        <Col md={2}></Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row>
                <Col md={1}></Col>
                <Col md={10} className="justify-content-center">
                    <InfiniteScroll
                        dataLength={answer.length}
                        next={fetchImages}
                        hasMore={true}
                    >
                        <div className="grid flex">
                            {answer.map((photo, index) => (
                                <div className="box">
                                    <Card img={photo.urls.small} key={index} />
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}

export default SearchArea
