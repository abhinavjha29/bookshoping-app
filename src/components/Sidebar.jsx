import React, { useState } from "react";

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState(0);

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="mb-3">
      <h5>Filter Options</h5>
      <div className="mb-3">
        <label htmlFor="sortBy" className="form-label">
          Sort By:
        </label>
        <select className="form-select" id="sortBy">
          <option defaultValue>Choose...</option>
          <option value="1">Featured</option>
          <option value="2">Price: Low to High</option>
          <option value="3">Price: High to Low</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <select className="form-select" id="category">
          <option defaultValue>Choose...</option>
          <option value="1">Fiction</option>
          <option value="2">Non-Fiction</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="priceRange" className="form-label">
          Price Range:
        </label>
        <input
          type="range"
          className="form-range"
          id="priceRange"
          min="0"
          max="100"
          value={priceRange}
          onChange={handlePriceChange}
        />
        <div className="d-flex justify-content-between">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;
