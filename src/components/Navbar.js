import React from "react";
import {ethers} from "ethers";
import { useEffect } from "react";
import $ from "jquery";
function Navbar({account , setAccount}) {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
}

  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
        $(".nav-bar").addClass("sticky-top");
      } else {
        $(".nav-bar").removeClass("sticky-top");
      }
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
      return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 45) {
        $(".nav-bar").addClass("sticky-top");
      } else {
        $(".nav-bar").removeClass("sticky-top");
      }
    });
  });
  return (
    <>
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}

      <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a
            href="#"
            className="navbar-brand d-flex align-items-center text-center"
          >
            <div className="icon p-2 me-2">
              <img
                className="img-fluid"
                src="img/icon-deal.png"
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <h2 className="m-0 text-primary">BlockBricks</h2>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="#" className="nav-item nav-link active">
                Home
              </a>
              <a href="#" className="nav-item nav-link">
                About
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Property
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="property-list.html" className="dropdown-item">
                    Property List
                  </a>
                  <a href="property-type.html" className="dropdown-item">
                    Property Type
                  </a>
                  <a href="property-agent.html" className="dropdown-item">
                    Property Agent
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Error
                  </a>
                </div>
              </div>
              <a href="#" className="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
          {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
