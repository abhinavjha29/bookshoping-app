import React from "react";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <ul className="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white active">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link px-2 text-white dropdown-toggle hover"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Fiction
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Non Fiction
                  </a>
                </li>

                {/* Add more categories as needed */}
                <li>
                  <a className="dropdown-item" href="#">
                    Children
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Academics
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white hover">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white hover">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white hover">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex justify-content-center"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login/SignUp
            </button>
            <button type="button" className="btn btn-warning">
              Admin
            </button>
            <button
              type="button"
              className="btn btn-primary position-relative"
              style={{ marginLeft: "8px" }}
            >
              Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
