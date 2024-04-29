import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./ProductSlider.css";
import { IoIosArrowBack, IoIosArrowRoundForward, IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { TfiFullscreen } from "react-icons/tfi";

export default function ProductSlider(props) {
    const {title, description, image} = props
  const [productData, setProductData] = useState([]);
  
  const swiperRef = useRef(null);

  useEffect(() => {
    console.clear();
    const FetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/?limit=10`);
      const jsonData = await response.json();
      setProductData(jsonData);
    };
    FetchData();
  });


  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <section className="productbanner px-3">
        <div className="row px-xl-5">
          <div className="col-md-3 d-flex justify-content-center align-items-center ">
            <div className="Banner">
              <img
                src={image}
                alt="banner"
                className="cursor"
            
              />
            </div>
          </div>
          <div className="col-md-9 productrow  mb-4">
            <div className="d-flex align-items-center ml-auto">
              <div className="info w-75">
                <h3 className="hd ">{title}</h3>
                <p className="text-lightr text-sml">
                  {description}
                </p>
              </div>
              <button
                type="button"
                class="btn btn-outline-primary ml-auto button "
              >
                <Link to={'/shop'} className="text-dark text-decoration-none">
                  View All <IoIosArrowRoundForward />
                </Link>
              </button>
            </div>
            <div className="swiper-controls d-flex justify-content-between ">
              <button className="prev-btn" onClick={handlePrev} >
                <IoIosArrowBack />
              </button>
              <button className="next-btn" onClick={handleNext}>
                <IoIosArrowRoundForward />
              </button>
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper mt-2 "
              breakpoints={{
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 2 },
                375: {sliderPerView: 1},

              }}
            >
              <div className="">
                {productData.map((products, index) => {
                  return (
                    <SwiperSlide>
                      <div className="product-item bg-light mb-4" key={index}>
                        <div className="product-img position-relative overflow-hidden">
                          <img
                            className="img-fluid product-imgs"
                            src={products.image}
                            alt={products.title}
                          />
                          <div className="product-action1 ">
                            <a
                              className="btn btn-outline-dark btn-square"
                              href="/"
                            >
                                <TfiFullscreen/>
                            </a>
                            <a
                              className="btn btn-outline-dark btn-square mt-2"
                              href="/"
                            >
                             <IoMdHeartEmpty/>
                            </a>
                          </div>

                          <div className="text-center py-4">
                            <a
                              className="h6 text-decoration-none text-truncate"
                              href="/"
                            >
                              {products.title.substring(0, 20)}
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
                              <small>
                                {products.rating && products.rating.rate}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
