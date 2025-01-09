import React from "react";
import { Card } from "react-bootstrap";

const CountryCard = ({ country }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="d-flex align-items-center">
        <img
          src={country.flag}
          alt={country.name}
          style={{ width: "50px", height: "30px", marginRight: "15px" }}
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
