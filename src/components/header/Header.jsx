import React, { useState } from "react";

const Header = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <h1>Countries</h1>
      <div>
        {["All", "Asia", "Europe"].map((filter) => (
          <button
            key={filter}
            className={`btn ${
              activeFilter === filter ? "btn-primary" : "btn-light"
            } mx-2`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
