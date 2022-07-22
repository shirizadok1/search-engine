import { Input } from "@material-ui/core";
import React from "react";
import { Button, Form } from "react-bootstrap";

function SearchArea() {
    return(
        <div className="search-area">
            <Form action="">
            <div>
                <input className="search-bar input" type="text" placeholder="Search Anything"></input>
            </div>
                <Button type="submit"><img className="search-img" src="../search.png" /></Button>
            </Form>
        </div>
    );


};

export default SearchArea;