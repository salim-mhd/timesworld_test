import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import Slider from "../slider/Slider";
import CountryCard from "../countryCard/CountryCard";
import { Button } from "react-bootstrap";
import Footer from "../footer/Footer";
import "./Home.css";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    // Fetch country data
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      });
  }, []);

  const handleFilterChange = (filter) => {
    if (filter === "All") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) => country.region === filter)
      );
    }
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="home">
      <Header onFilterChange={handleFilterChange} />
      <div className="welcome-container">
        <hr className="welcome-line-left" />
        <div className="welcome">WELCOME</div>
        <hr className="welcome-line-right" />
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-12 col-md-8 order-2 order-md-1">
            <Slider />
          </div>
          <div className="col-12 col-md-4 order-1 order-md-2 mb-md-0 mb-4 custom-height">
            <div
              className="border border-2 border-black"
              style={{ height: "100%", backgroundColor: "#eee" }}
            ></div>
          </div>
        </div>
        <div className="row mt-4">
          {filteredCountries.slice(0, visibleCount).map((country) => (
            <div className="col-md-6" key={country.name}>
              <CountryCard country={country} />
            </div>
          ))}
        </div>
        {visibleCount < filteredCountries.length && (
          <div className="text-center mb-4">
            <Button className="rounded-0 btn btn-secondary" onClick={loadMore}>
              Load More
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
