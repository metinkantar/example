import Link from "next/link";
import React from "react";
import { FaHome, FaThLarge, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <>
      <div className="bg-mobile-menu  mobile-bottom-navigation fixed-bottom sticky-bottom d-xxl-none d-xl-none d-lg-none d-md-none d-sm-none">
        <div className="d-flex justify-content-evenly py-2">
          <Link href="#" passHref>
            <a><FaHome color="gray" size="34" /></a>
          </Link>
          <Link href="#" passHref>
            <a><FaThLarge color="gray" size="34" /></a>
          </Link>
          <Link href="#" passHref>
            <a> <FaHeart color="gray" size="34" /></a>
          </Link>
          <Link href="#" passHref>
            <a> <FaShoppingBag color="gray" size="34" /></a>
          </Link>
          <Link href="#" passHref>
            <a><FaUser color="gray" size="30" /></a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
