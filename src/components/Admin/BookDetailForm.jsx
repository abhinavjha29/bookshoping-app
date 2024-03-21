import React, { useState } from "react";
import styles from "./BookDetailForm.module.css";

const BookDetailForm = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography/Memoir",
    "History",
    "Self-Help",
    "Horror",
    "Thriller/Suspense",
    "Poetry",
    "Business/Finance",
    "Cooking/Food",
    "Travel",
  ];

  const [formData, setFormData] = useState({
    bookName: "",
    bookDescription: "",
    bookImage: null,
    originalPrice: "",
    discountedPrice: "",
    category: [],
    isAvailable: false,
  });
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        category: [...formData.category, value],
      });
    } else {
      setFormData({
        ...formData,
        category: formData.category.filter((cat) => cat !== value),
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add further processing or submit logic here
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className={`card col-md-8 ${styles.admin_card}`}>
          <div className="card-body">
            <h5 className="card-title">Book Detail</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bookName" className="form-label">
                  Book Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookName"
                  name="bookName"
                  value={formData.bookName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookDescription" className="form-label">
                  Book Description
                </label>
                <textarea
                  className="form-control"
                  id="bookDescription"
                  name="bookDescription"
                  value={formData.bookDescription}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="bookImage" className="form-label">
                  Book Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="bookImage"
                  name="bookImage"
                  onChange={handleInputChange}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="originalPrice" className="form-label">
                      Original Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="originalPrice"
                      name="originalPrice"
                      value={formData.originalPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="discountedPrice" className="form-label">
                      Discounted Price (optional)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="discountedPrice"
                      name="discountedPrice"
                      value={formData.discountedPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Categories</label>
                <div>
                  {bookCategories.map((category) => (
                    <div
                      key={category}
                      className="form-check form-check-inline"
                    >
                      <input
                        type="checkbox"
                        id={category}
                        name={category}
                        value={category}
                        checked={formData.category.includes(category)}
                        onChange={handleCategoryChange}
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="isAvailable"
                  name="isAvailable"
                  checked={formData.isAvailable}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="isAvailable">
                  Available
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailForm;
