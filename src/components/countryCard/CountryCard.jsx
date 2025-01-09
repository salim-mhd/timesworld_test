import React from "react";
import { Card } from "react-bootstrap";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
  return (
    <Card className="mb-3 card-container border border-2 border-black rounded-0">
      <Card.Body className="d-flex align-items-center">
        <img
          src={country.flag}
          alt={country.name}
          style={{ width: "100px", height: "80px", marginRight: "15px" }}
        />
        <div>
          <h5>{country.name}</h5>
          <p>{country.region}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
