import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { CartContext } from "./Context Api/ShopContext";

export default function Navbar() {
  const [isOpen, setisOpen]= useState(false);
  const {cartItems} = useContext(CartContext);

  const handleToggle =()=>{
    setisOpen(!isOpen)
  };
  const closeMenu =()=>{
    setisOpen(false)
  }
  return (
    <div className="container-fluid bg-dark mb-30" id="bact to top">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: "65px", padding: " 0 30px" }}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2"></i>Categories
            </h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
            id="navbar-vertical"
            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dresses <i className="fa fa-angle-right float-right mt-1"></i>
                </a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                  <a href="/" className="dropdown-item">
                    Men's Dresses
                  </a>
                  <a href="/" className="dropdown-item">
                    Women's Dresses
                  </a>
                  <a href="/" className="dropdown-item">
                    Baby's Dresses
                  </a>
                </div>
              </div>
              <a href="/" className="nav-item nav-link">
                Shirts
              </a>
              <a href="/" className="nav-item nav-link">
                Jeans
              </a>
              <a href="/" className="nav-item nav-link">
                Swimwear
              </a>
              <a href="/" className="nav-item nav-link">
                Sleepwear
              </a>
              <a href="/" className="nav-item nav-link">
                Sportswear
              </a>
              <a href="/" className="nav-item nav-link">
                Jumpsuits
              </a>
              <a href="/" className="nav-item nav-link">
                Blazers
              </a>
              <a href="/" className="nav-item nav-link">
                Jackets
              </a>
              <a href="/" className="nav-item nav-link">
                Shoes
              </a>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <div className="container">
              
              <a href="/" className="text-decoration-none m-auto d-block d-lg-none ">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                onClick={handleToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div
                className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`}
                id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link active" onClick={closeMenu}>
                    Home
                  </Link>
                  <Link to="/shop" className="nav-item nav-link" onClick={closeMenu}>
                    Shop
                  </Link>
                  <Link to="/shop-detail" className="nav-item nav-link" onClick={closeMenu}>
                    Shop Detail
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1"></i>
                    </Link>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <Link to="/shopping-cart" className="dropdown-item" onClick={closeMenu}>
                        Shopping Cart
                      </Link>
                      <Link to="/checkout" className="dropdown-item" onClick={closeMenu}>
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <Link to="/contact" className="nav-item nav-link" onClick={closeMenu}>
                    Contact
                  </Link>
                </div>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block mobile-visible">
                  <Link to="/shopping-cart" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
