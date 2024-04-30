import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-2">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <Link className="text-body mr-3" href="">
              About
            </Link>
            <Link className="text-body mr-3" href="">
              Contact
            </Link>
            <Link className="text-body mr-3" href="">
              Help
            </Link>
            <Link className="text-body mr-3" href="">
              FAQs
            </Link>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-wrap justify-content-between align-items-center text-lg-right d-lg-block">
          <div className="d-inline-flex justify-content-center text-center align-items-center">
            <div className="btn-group mr-0 mr-md-3  ">
              <button
                type="button"
                className="btn btn-sm btn-primary w dropdown-toggle"
                data-toggle="dropdown"
              >
                My Account
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="/signin" className="dropdown-item">
                  Sign in
                </Link>
                <Link to="/signup" className="dropdown-item">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="d-md-none d-none d-lg-block">
              <p className="m-0">Customer Service</p>
              <a
                href="tel:/+92 3332830600"
                className="m-0 text-dark fw-bold text-decoration-none"
              >
                +92 3332830600
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-md-start align-items-center d-lg-none">
            <img
              className="rounded-circle"
              src="/img/cat-2.jpg"
              alt=""
              width={50}
            />
            <div className="d-flex flex-column ">
              <p className="ml-1 lh-0 mb-0">User-Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center bg-light py-3 px-xl-2 d-none d-lg-flex">
        <div className="col-lg-4">
          <a href="/" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">
              Multi
            </span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
              Shop
            </span>
          </a>
        </div>
        <div className="col-lg-6 col-6 text-left">
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-2 col-6 text-left ">
          <div className="  d-flex justify-content-center align-items-center  ">
            <img
              className=" rounded-circle"
              src="/img/cat-2.jpg"
              alt=""
              width={50}
            />
            <div className="d-flex flex-column ">
              <p className="ml-2 lh-0  mb-0"> User-Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
