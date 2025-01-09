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
      <div className="mt-4">
        <div className="row">
          <div className="col-12">
            <Slider />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row mt-4">
          {filteredCountries.slice(0, visibleCount).map((country) => (
            <div className="col-md-6" key={country.name}>
              <CountryCard country={country} />
            </div>
          ))}
        </div>
        {visibleCount < filteredCountries.length && (
          <div className="text-center mt-4">
            <Button onClick={loadMore}>Load More</Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
