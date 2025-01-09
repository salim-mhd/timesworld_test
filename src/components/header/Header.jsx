import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="d-flex justify-content-between m-0"
    >
      <Container className="my-0">
        <Navbar.Brand href="#home" className="fs-5 fw-bold">
          Countries
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="border-0 fs-6"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {["All", "Asia", "Europe"].map((filter) => (
              <Nav.Link
                key={filter}
                className={`text-secondary ${
                  activeFilter === filter
                    ? "border-md border-2 border-black border-bottom text-dark"
                    : "btn-light"
                } mx-2`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
