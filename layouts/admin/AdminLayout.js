/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  FaUser,
  FaSearch,
  FaHome,
  FaFolder,
  FaList,
  FaMarkdown,
  FaUserFriends,
  FaPalette,
  FaRocket,
  FaChartPie,
  FaStackExchange,
  FaSpinner,
  FaCogs,
  FaSortDown,
  FaAngleDoubleRight,
  FaBars
} from 'react-icons/fa'


const AdminLayout = ({ title, desc, children }) => {
  return (
    <>
      <Head>
      <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={desc ? desc + " MedMarket Admin Panel" : "MedMarket Admin Panel"} />
        <meta name="author" content="medmarket | meka" />
        <title>{ title ? title + " | MedMarket Admin Panel" : "MedMarket Admin Panel" }</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3 text-white" href="index.html">MedMarket</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><FaBars color="gray" /></button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><FaSearch /></button>
          </div>
        </form>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser color="white" /></a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">Settings</a></li>
              <li><a className="dropdown-item" href="#!">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Logout</a></li>
            </ul>
          </li>
        </ul>
      </nav>


      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                {/* <div className="sb-sidenav-menu-heading">Core</div> */}
                {/* ANASAYFA */}
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <FaHome size={20} className="me-2" />
                  </div>
                  <span className="">Anasayfa</span>
                </a>

                {/* ??R??NLER */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                  <div className="sb-nav-link-icon">
                    <FaFolder size={20} className="me-2" />
                  </div>
                  <span className="">??r??nler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    
                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsOne" aria-expanded="false" aria-controls="collapseProductsOne">
                      <FaAngleDoubleRight className="me-1" /> ??r??nler
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsOne" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">??r??n Y??netimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Kategori Y??netimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Marka Y??netimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Tedarik??i Firmalar </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Etiket Y??netimi </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsTwo" aria-expanded="false" aria-controls="collapseProductsTwo">
                      <FaAngleDoubleRight className="me-1" /> Ek ??zellikler
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsTwo" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Varyasyon Gruplar?? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Teknik Detaylar </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n Detay Ayarlar?? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ekstra ??r??n Bilgileri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n Detay Sekmeleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n Aksesuar Gruplar?? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Asorti Grup Y??netimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n Yorumlar?? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n Liste Ge??i?? Y??netimi </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsThree" aria-expanded="false" aria-controls="collapseProductsThree">
                      <FaAngleDoubleRight className="me-1" /> Hat??rlatmalar
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsThree" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Stok Alarm Hat??rlatma </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Fiyat Alarm Hat??rlatma </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsFour" aria-expanded="false" aria-controls="collapseProductsFour">
                      <FaAngleDoubleRight className="me-1" /> Geli??mi?? ??r??n S??ralama
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsFour" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Anasayfa ??r??n S??ralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Kategori ??r??n S??ralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Marka ??r??n S??ralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Tedarik??i ??r??n S??ralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Etiket ??r??n S??ralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??r??n S??ralama Y??netimi </a>
                        </Link>
                      </nav>
                    </div>
                  </nav>
                </div>

                {/* S??PAR???? Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrders" aria-expanded="false" aria-controls="collapseOrders">
                  <div className="sb-nav-link-icon">
                    <FaList size={20} className="me-2" />
                  </div>
                  <span className="">Sipari??ler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseOrders" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrdersOne" aria-expanded="false" aria-controls="collapseOrdersOne">
                      <FaAngleDoubleRight className="me-1" /> Sipari?? Y??netimi
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseOrdersOne" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Sipari??ler Listesi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??deme Kayd?? Bulunmayan Sipari??ler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Silinen Sipari??ler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??deme Sonucu D??nmeyen Sipari??ler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Hatal?? ??deme Kay??tlar?? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Magaza Sat?????? </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Sipari?? Olu??tur </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??ptal Edilen Sipari??ler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Sipari?? ??r??n A??ama Y??netimi </a>
                        </Link>
                      </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrdersTwo" aria-expanded="false" aria-controls="collapseOrdersTwo">
                      <FaAngleDoubleRight className="me-1" /> Sipari?? Bildirimleri
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseOrdersTwo" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Havale / EFT Bildirimleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Telefonla Sipari?? Talepleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Telefonla Onay Bekleyen ??demeler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">??ptal / ??ade Talepleri </a>
                        </Link>
                      </nav>
                    </div>
                  </nav>
                </div>

                {/* MOD??LLER Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseModuls" aria-expanded="false" aria-controls="collapseModuls">
                  <div className="sb-nav-link-icon">
                    <FaMarkdown size={20} className="me-2" />
                  </div>
                  <span className="">Mod??ller</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseModuls" aria-labelledby="headingThree" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* KULLANICILAR Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                  <div className="sb-nav-link-icon">
                    <FaUserFriends size={20} className="me-2" />
                  </div>
                  <span className="">??yeler / Bayiler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseUsers" aria-labelledby="headingFour" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* TASARIM Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseDesign" aria-expanded="false" aria-controls="collapseDesign">
                  <div className="sb-nav-link-icon">
                    <FaPalette size={20} className="me-2" />
                  </div>
                  <span className="">Tasar??m</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseDesign" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* SEO Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseSeo" aria-expanded="false" aria-controls="collapseSeo">
                  <div className="sb-nav-link-icon">
                    <FaRocket size={20} className="me-2" />
                  </div>
                  <span className="">SEO</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseSeo" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* RAPORLAR Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseReports" aria-expanded="false" aria-controls="collapseReports">
                  <div className="sb-nav-link-icon">
                    <FaChartPie size={20} className="me-2" />
                  </div>
                  <span className="">Raporlar</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseReports" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* ENTEGRASYONLAR Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseIntegrated" aria-expanded="false" aria-controls="collapseIntegrated">
                  <div className="sb-nav-link-icon">
                    <FaStackExchange size={20} className="me-2" />
                  </div>
                  <span className="">Entegrasyonlar</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseIntegrated" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* KAMPANYALAR Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseCampaigns" aria-expanded="false" aria-controls="collapseCampaigns">
                  <div className="sb-nav-link-icon">
                    <FaSpinner size={20} className="me-2" />
                  </div>
                  <span className="">Kampanyalar</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseCampaigns" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>

                {/* AYARLAR Y??NET??M?? */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
                  <div className="sb-nav-link-icon">
                    <FaCogs size={20} className="me-2" />
                  </div>
                  <span className="">Ayarlar</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseSettings" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> ??r??n Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Y??netimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Y??netimi</a>
                    </Link>
                  </nav>
                </div>



              </div>
            </div>


            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              @MeKa
            </div>

          </nav>
        </div>
        <div id="layoutSidenav_content">
          {children}
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; MedMarket 2022</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </>
  );
};

export default AdminLayout;

/* ALT KATEGOR??N??N ALT KATEGOR??S?? ??RNEK */

/*

*/