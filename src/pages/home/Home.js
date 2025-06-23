import React, { Fragment } from "react";
import clsx from "clsx";
import SEO from "../../components/seo";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/HeroSliderTen";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";

const HomeFurnitureSix = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Skydecor - Premium Quality Laminates Design Collections"
        description="Discover the widest range of high-quality laminates for every space at Skydecor, India's leading laminates manufacturer. Explore today!"
      />

      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderThirtyOne
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-70"
        />

        <section
          className="rooms1  bg-cream"
          data-scroll-index={1}
          style={{ paddingBottom: "70px", paddingTop: "70px" }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="welcome-content text-center">
                <h1 style={{ textTransform: "uppercase" }}>
                  SKYDECOR'S TRENDNG Laminates
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    <img
                      src="assets\img\product\laminates\pvc-laminates.jpg"
                      alt=""
                    />
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="/">PVC Laminates</a>
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\decorative-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Decorative Laminates</a>{" "}
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\liner-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Liner Laminates</a>{" "}
                    </h5>

                    <div className="line" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="item">
                  <div className="position-re o-hidden">
                    {" "}
                    <img
                      src="assets\img\product\laminates\acrylic-laminates.jpg"
                      alt=""
                    />{" "}
                  </div>
                  <span className="category">
                    <a href="modular-kitchens.php">Detail</a>
                  </span>
                  <div className="con">
                    <h5>
                      <a href="modular-kitchens.php">Acrylic Laminates</a>
                    </h5>
                    <div className="line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


          <div className={clsx("welcome-area")}>
          <div className="container">
            <div className="welcome-content text-center">
              <h1 style={{ textTransform: "uppercase" }}>
                {" "}
                SKYDECOR'S TRENDNG Laminates
              </h1>
            </div>
          </div>
        </div>

        <TabProductTwenty
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />





      <section className="slider-home5" style={{ paddingBottom: "70px" }}>
  <div className="container">
    <div className="row">
      {/* Item 1 */}
      <div className="col-md-6 mb-4">
        <div className="collection-position style-2 h-100">
          <a href="product-detail.html" className="img-style d-block">
            <img
              className="effect-paralax img-fluid"
              src="assets/img/banner/ext-clading.jpg"
              alt="Exterior Cladding"
            />
          </a>
          <div className="content cls-content">
            <div className="cls-heading">
              <h3 className="text_white">Exterior Cladding</h3>
              <p className="text_white">
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry.
              </p>
            </div>
            <a href="/" className="btn-line btn-line-white">
              <span>Discover More</span>
            </a>
          </div>
        </div>
      </div>

    <div className="col-md-6 ">
      <div className="row">

      <div className="col-md-12 mb-4">
        <div className="collection-position style-2 spacing-1 h-100">
          <a href="product-detail.html" className="img-style d-block">
            <img
              className="effect-paralax img-fluid"
              src="assets/img/banner/1mm.png"
              alt="1 mm+ Laminates"
            />
          </a>
          <div className="content cls-content">
            <div className="cls-heading">
              <h4 className="text_white">1 mm+ Laminates Design Master</h4>
              <p className="text_white">
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry.
              </p>
            </div>
            <a href="/" className="btn-line btn-line-white">
              <span>Discover More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="col-md-12 mb-4">
        <div className="collection-position style-2 spacing-1 h-100">
          <a href="product-detail.html" className="img-style d-block">
            <img
              className="effect-paralax img-fluid"
              src="assets/img/banner/soffito.png"
              alt="Soffitto Panels"
            />
          </a>
          <div className="content cls-content">
            <div className="cls-heading">
              <h4 className="text_white">Soffitto Panels</h4>
              <p className="text_white">
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry.
              </p>
            </div>
            <a href="/" className="btn-line btn-line-white">
              <span>Discover More</span>
            </a>
          </div>
        </div>
      </div>


      </div>

    </div>


    </div>
  </div>
</section>








      
        <section
          className="cta-bg-img"
          style={{ backgroundImage: "url(assets/img/banner/bg6.jpg)" }}
        >
          <div className="container text-center">
            <div className="inner-box">
              <h2>
                <img
                  src="assets/img/bg/textpart1.png"
                  style={{ height: 200, width: 600 }}
                  alt=""
                />
              </h2>
              <a href="./home" class="readmore">
                <i
                  class="fa-solid fa-arrow-right fa-xl"
                  style={{ color: "#fff" }}
                ></i>{" "}
              </a>
            </div>
          </div>
        </section>

        <section
          className="cta-bg-img"
          style={{ backgroundImage: "url(assets/img/banner/bg5.jpg)" }}
        >
          <div className="container text-center">
            <div className="inner-box">
              <h2>
                <img
                  src="assets/img/bg/textpart2.png"
                  alt=""
                  style={{ height: 250, width: 500 }}
                />
              </h2>
              <a href="./home" class="readmore">
                {" "}
                <i
                  class="fa-solid fa-arrow-right fa-xl"
                  style={{ color: "#fff" }}
                ></i>{" "}
              </a>
            </div>
          </div>
        </section>

        <section style={{ paddingBottom: "70px", marginTop: "70px" }}>
          <div className="container">
            <div className={clsx("welcome-area")}>
              <div className="container">
                <div className="welcome-content text-center">
                  <h1 style={{ textTransform: "uppercase" }}>
                    It's time to #StayCurious
                  </h1>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-item-center">
              <div className="col-md-10">
                <div className="vid-area mb-30">
                  <video controls autoPlay loop muted>
                    <source
                      src="https://res.cloudinary.com/dtlazsqas/video/upload/v1748254339/videoplayback_zc120w.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://waltz.co.in/introvideo.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flat-spacing-2 pt-0">
          <div className="section-box-cls">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading-section style-white">
                    <h3 className="wow fadeInUp">
                      Discover Our Signature Interior Collections
                    </h3>
                    <p
                      className="text-body-default wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      Explore our carefully crafted interior design collections,
                      each tailored to bring elegance and <br /> functionality
                      to your spaces.
                    </p>
                  </div>
                  <ul className="tab-banner">
                    <li className="nav-tab-item wow fadeInUp">
                      <div className="nav-tab-link hover-cursor-img">
                        <h3 className="title text-line-clamp-1">
                          <span className="text-title">01.</span>
                          Modern Minimalist Collection
                        </h3>
                        <a href="/" className="arr-link">
                          <span className="text-button-small text-more">
                            View More
                          </span>
                          <i className="icon icon-arrow-up-right" />
                        </a>
                      </div>
                    </li>
                    <li
                      className="nav-tab-item wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="nav-tab-link hover-cursor-img ">
                        <h3 className="title text-line-clamp-1">
                          <span className="text-title">02.</span>
                          Cozy Industrial Collection
                        </h3>
                        <a href="/" className="arr-link">
                          <span className="text-button-small text-more">
                            View More
                          </span>
                          <i className="icon icon-arrow-up-right" />
                        </a>
                      </div>
                    </li>
                    <li
                      className="nav-tab-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="nav-tab-link hover-cursor-img">
                        <h3 className="title text-line-clamp-1">
                          <span className="text-title">03.</span>
                          Scandinavian Elegance Collection
                        </h3>
                        <a href="/" className="arr-link">
                          <span className="text-button-small text-more">
                            View More
                          </span>
                          <i className="icon icon-arrow-up-right" />
                        </a>
                      </div>
                    </li>
                    <li
                      className="nav-tab-item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="nav-tab-link hover-cursor-img">
                        <h3 className="title text-line-clamp-1">
                          <span className="text-title">04.</span>
                          Storage Solutions Collection
                        </h3>
                        <a href="/" className="arr-link">
                          <span className="text-button-small text-more">
                            View More
                          </span>
                          <i className="icon icon-arrow-up-right" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BlogFeaturedThree spaceTopClass="pt-70" spaceBottomClass="pb-70" />


      </LayoutEight>
    </Fragment>
  );
};

export default HomeFurnitureSix;
