import React from "react";

const SingleItemView = () => {
  const book = {
    bookName: "ncert",
    bookDescription: "acdemic book",
    bookImage: null,
    originalPrice: "120",
    discountedPrice: "99.98",
    category: ["Non-Fiction", "History"],
    isAvailable: false,
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 md-0 single_img"
              src={
                book.bookImage
                  ? book.bookImage
                  : "https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
              }
              alt="Book Cover"
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{book.bookName}</h1>
            <div className="fs-5 mb-1">
              {book.discountedPrice && (
                <>
                  <span className="text-decoration-line-through original_price">
                    ${book.originalPrice}
                  </span>
                  <span>${book.discountedPrice}</span>
                </>
              )}
              {!book.discountedPrice && <span>${book.originalPrice}</span>}
            </div>
            <p className="lead">{book.bookDescription}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                min="1"
                style={{ maxWidth: "6rem" }}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleItemView;
