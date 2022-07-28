import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function MainCategory() {
  return (
    <>
      <div className="container-fluid bg-light border-bottom d-none d-md-block d-lg-block">
        <ul className="main-navbar-nav">
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Meyve, Sebze</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Temel Gıda</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Süt, Kahvaltılık</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Et, Tavuk, Balık</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Anne, Bebek</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Deterjan, Temizlik</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Ev, Yaşam</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Kişisel Bakım, Kozmetik</a>
            </Link>
          </li>
          <li className="main-nav-item">
            <Link href="#">
              <a className="main-nav-link py-2" href="#">Pet Shop</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainCategory;

/*
 <ul>
              <li className="main-nav-category">
                <Link href="#" passHref>
                  <a className="py-2">
                    <AiOutlineMenu size={22} /> KATEGORİLER
                  </a>
                </Link>
                <ul className="main-nav-subcategory">
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      <a className="main-cat-title py-2">Kampanyalar</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="main-cat-title py-2">Kampanyalar</a>
                </Link>
              </li>
            </ul>
*/