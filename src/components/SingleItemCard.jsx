import React from "react";
import { NavLink } from "react-router-dom";

const SingleItemCard = ({ bookDetail }) => {
  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={bookDetail.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{bookDetail.name}</h5>
        <p className="card-text">{bookDetail.description}</p>
        <p>
          Price: ${bookDetail.price.toFixed(2)} (Discounted: $
          {bookDetail.discountedPrice.toFixed(2)})
        </p>
        <div className="d-flex justify-content-between">
          <NavLink to="/single" className="btn btn-primary">
            Go Somewhere
          </NavLink>
          <button className="btn btn-danger">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemCard;
