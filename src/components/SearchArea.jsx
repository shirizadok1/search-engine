import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { ImSearch } from 'react-icons/im';

function SearchArea() {
   
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
              <Button variant="outline-secondary" id="button-addon2">
                <ImSearch />
              </Button>
            </InputGroup>
          </div>
        </div>
      );
    }

export default SearchArea;