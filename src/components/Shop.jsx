import React, { useState, useEffect } from "react";
import './Shop.css';
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [totalPages, setTotalPage] =useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    console.clear();
    const FetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const jsonData = await response.json();
      setProductData(jsonData);
      setTotalPage(Math.ceil(jsonData.length / 6))
    };
    FetchData();
  },);
 
  const pagesChanges = (newPage)=>{
    setCurrentpage(newPage)
  };
  const prevPage = ()=>{
    if(currentPage > 1){
      setCurrentpage(currentPage - 1)
    }
  };
  const nextpage = ()=>{
    if(currentPage < totalPages){
      setCurrentpage(currentPage + 1)
    }
  };
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  

  const itemPerPage = 6
  const startIndex = (currentPage-1)* itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const productItem = productData.slice(startIndex, endIndex)

  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <a className="breadcrumb-item text-dark" href="/">
              Home
            </a>
            <a className="breadcrumb-item text-dark" href="/">
              Shop
            </a>
            <span className="breadcrumb-item active">Shop List</span>
          </nav>
        </div>
      </div>
      <div className="row px-xl-5">
        <div className="col-lg-3 col-md-4">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by price</span>
          </h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked
                  id="price-all"
                />
                <label className="custom-control-label" for="price-all">
                  All Price
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-1"
                />
                <label className="custom-control-label" for="price-1">
                  $0 - $100
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-2"
                />
                <label className="custom-control-label" for="price-2">
                  $100 - $200
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-3"
                />
                <label className="custom-control-label" for="price-3">
                  $200 - $300
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-4"
                />
                <label className="custom-control-label" for="price-4">
                  $300 - $400
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-5"
                />
                <label className="custom-control-label" for="price-5">
                  $400 - $500
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>

          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by color</span>
          </h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked
                  id="color-all"
                />
                <label className="custom-control-label" for="price-all">
                  All Color
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="color-1"
                />
                <label className="custom-control-label" for="color-1">
                  Black
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="color-2"
                />
                <label className="custom-control-label" for="color-2">
                  White
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="color-3"
                />
                <label className="custom-control-label" for="color-3">
                  Red
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="color-4"
                />
                <label className="custom-control-label" for="color-4">
                  Blue
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="color-5"
                />
                <label className="custom-control-label" for="color-5">
                  Green
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>

          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by size</span>
          </h5>
          <div className="bg-light p-4 mb-30">
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked
                  id="size-all"
                />
                <label className="custom-control-label" for="size-all">
                  All Size
                </label>
                <span className="badge border font-weight-normal">1000</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="size-1"
                />
                <label className="custom-control-label" for="size-1">
                  XS
                </label>
                <span className="badge border font-weight-normal">150</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="size-2"
                />
                <label className="custom-control-label" for="size-2">
                  S
                </label>
                <span className="badge border font-weight-normal">295</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="size-3"
                />
                <label className="custom-control-label" for="size-3">
                  M
                </label>
                <span className="badge border font-weight-normal">246</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="size-4"
                />
                <label className="custom-control-label" for="size-4">
                  L
                </label>
                <span className="badge border font-weight-normal">145</span>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="size-5"
                />
                <label className="custom-control-label" for="size-5">
                  XL
                </label>
                <span className="badge border font-weight-normal">168</span>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light">
                    <i className="fa fa-th-large"></i>
                  </button>
                  <button className="btn btn-sm btn-light ml-2">
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
                <div className="ml-2">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Sorting
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="/">
                        Latest
                      </a>
                      <a className="dropdown-item" href="/">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="/">
                        Best Rating
                      </a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Showing
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="/">
                        10
                      </a>
                      <a className="dropdown-item" href="/">
                        20
                      </a>
                      <a className="dropdown-item" href="/">
                        30
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-1">
              {productItem && productItem.length > 0 ? productItem.map((products, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6 ml-3 product-item bg-light mb-4" key={index} >
                    <div className="product-img position-relative overflow-hidden"  onClick={()=>navigate(`/shop-detail/${products.id}`)}>
                      <img
                        className="img-fluid product-imgs"
                        src={products.image}
                        alt={products.title}
                       
                        
                      />
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="/">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                        <a className="btn btn-outline-dark btn-square" href="/">
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                    
                    <div className="text-center py-4">
                      <a
                        className="h6 text-decoration-none text-truncate"
                        href="/"
                      >
                        {products.title.substring(0,20)}
                      </a>

                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>${products.price}</h5>
                        <h6 className="text-muted ml-2">
                          <del>${products.price}</del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="fa fa-star text-primary mr-1"></small>
                        <small className="far fa-star text-primary mr-1"></small>
                        <small className="far fa-star text-primary mr-1"></small>
                        <small>{products.rating && products.rating.rate}</small>
                      </div>
                    </div>
                    </div>
                  </div>
                )
              }):""}
            </div>
            <div className="col-12">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item ">
                    <button className="page-link" onClick={prevPage} disabled={prevDisabled} style={prevDisabled ? { 
                                  color: "#6c757d",
                                  pointerEvents: "none",
                                  cursor: "auto",
                                  backgroundColor: "#fff",
                                  borderColor: "#dee2e6",
                                }:{}}>
                      Previous
                    </button>
                  </li>
                 {Array.from({length:totalPages},(_,i)=>{
                   const pageNumber = i + 1;
                   const isCurrentPage = pageNumber === currentPage;
                  
                      return(
                            <li className={`page-item `}>
                               <button className="page-link"
                                 key={i}
                                 onClick={()=>pagesChanges(pageNumber)}
                                 disabled={isCurrentPage} 
                                 style={isCurrentPage ? { // Apply styles conditionally based on isCurrentPage
                                  color: "#6c757d",
                                  pointerEvents: "none",
                                  cursor: "auto",
                                  backgroundColor: "#fff",
                                  borderColor: "#dee2e6",
                                } : {}} >
                                   {pageNumber}
                               </button>
                            </li>
                      )
                 })
                 }
                  <li className="page-item">
                    <button className="page-link" onClick={nextpage} disabled={nextDisabled} style={nextDisabled? { 
                                  color: "#6c757d",
                                  pointerEvents: "none",
                                  cursor: "auto",
                                  backgroundColor: "#fff",
                                  borderColor: "#dee2e6",
                                }:{}}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
