import React, { Component } from 'react';
import { FaRegHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BiMenu, BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";

class MainHeader extends Component {
  render() {
    return (
      <>
        <nav className="navbar sticky-top fixed-top navbar-expand-lg bg-light mt-0">
          <div className="container-sm d-flex flex-row py-1">
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex justify-content-start main-logo">
              <Link href="#" passHref className="main-title">
              <a>Med Market</a>
              </Link>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-8">
              <input
                type="search"
                className="header-search-input form-control"
                placeholder="Ürün veya marka ara..."
              />
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex flex-row justify-content-sm-end justify-content-md-end gap-2 main-icons">
              <a>
                <BiSearchAlt2
                  size={28}
                  className="main-icon-search d-md-none d-sm-none d-lg-none"
                />
              </a>
              <a>
                <FaUserAlt size={28} className="user-icon d-none d-sm-block" />
              </a>
              <a>
                <FaRegHeart size={29} className="whishlist-icon d-none d-sm-block" />
              </a>
              <a>
                <FaShoppingCart
                  size={29}
                  className="cart-icon d-none d-sm-block"
                />
              </a>

              <a className="mobile-button">
                <BiMenu size={24} />{" "}
              </a>
            </div>
          </div>
        </nav>

      </>
    );
  }
}

export default MainHeader;


/* function MainHeader2() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mt-0">
        <div className="container-sm d-flex flex-row py-3">
          <div className="col-sm-3 col-md-2 col-lg-2 d-flex justify-content-start main-logo">
            <Link href="#" passHref className="main-title">
              Med Market
            </Link>
          </div>
          <div className="col-sm-6 col-md-8 col-lg-8">
            <input
              type="search"
              className="header-search-input form-control"
              placeholder="Ürün veya marka ara..."
            />
          </div>
          <div className="col-sm-3 col-md-2 col-lg-2 d-flex flex-row justify-content-sm-end justify-content-md-end gap-2 main-icons">
            <a>
              <BiSearchAlt2
                size={28}
                className="main-icon-search d-md-none d-sm-none d-lg-none"
              />
            </a>
            <a>
              <FaUserAlt size={28} className="user-icon d-none d-sm-block" />
            </a>
            <a>
              <FaRegHeart size={29} className="whishlist-icon d-none d-sm-block" />
            </a>
            <a>
              <FaShoppingCart
                size={29}
                className="cart-icon d-none d-sm-block"
              />
            </a>

            <a className="mobile-button">
              <BiMenu size={24} />{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  )
} */
