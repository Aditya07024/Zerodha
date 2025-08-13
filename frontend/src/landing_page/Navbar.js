import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "white" }}
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          ></img>
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"style={{ marginLeft: "30%" } }>
              <li class="nav-item">
                <Link class="nav-Link mx-2 text-muted active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link mx-2 text-muted active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link mx-2 text-muted active" aria-current="page" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link mx-2 text-muted active" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link mx-2 text-muted active" aria-current="page" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
