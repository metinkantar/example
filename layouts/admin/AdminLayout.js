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

                {/* ÜRÜNLER */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                  <div className="sb-nav-link-icon">
                    <FaFolder size={20} className="me-2" />
                  </div>
                  <span className="">Ürünler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseProducts" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    
                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsOne" aria-expanded="false" aria-controls="collapseProductsOne">
                      <FaAngleDoubleRight className="me-1" /> Ürünler
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsOne" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Ürün Yönetimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Kategori Yönetimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Marka Yönetimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Tedarikçi Firmalar </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Etiket Yönetimi </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsTwo" aria-expanded="false" aria-controls="collapseProductsTwo">
                      <FaAngleDoubleRight className="me-1" /> Ek Özellikler
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsTwo" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Varyasyon Grupları </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Teknik Detaylar </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Detay Ayarları </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ekstra Ürün Bilgileri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Detay Sekmeleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Aksesuar Grupları </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Asorti Grup Yönetimi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Yorumları </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Liste Geçiş Yönetimi </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsThree" aria-expanded="false" aria-controls="collapseProductsThree">
                      <FaAngleDoubleRight className="me-1" /> Hatırlatmalar
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsThree" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Stok Alarm Hatırlatma </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Fiyat Alarm Hatırlatma </a>
                        </Link>
                      </nav>
                    </div>

                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseProductsFour" aria-expanded="false" aria-controls="collapseProductsFour">
                      <FaAngleDoubleRight className="me-1" /> Gelişmiş Ürün Sıralama
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseProductsFour" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Anasayfa Ürün Sıralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Kategori Ürün Sıralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Marka Ürün Sıralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Tedarikçi Ürün Sıralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Etiket Ürün Sıralama </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ürün Sıralama Yönetimi </a>
                        </Link>
                      </nav>
                    </div>
                  </nav>
                </div>

                {/* SİPARİŞ YÖNETİMİ */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrders" aria-expanded="false" aria-controls="collapseOrders">
                  <div className="sb-nav-link-icon">
                    <FaList size={20} className="me-2" />
                  </div>
                  <span className="">Siparişler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseOrders" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed active" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrdersOne" aria-expanded="false" aria-controls="collapseOrdersOne">
                      <FaAngleDoubleRight className="me-1" /> Sipariş Yönetimi
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseOrdersOne" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Siparişler Listesi </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ödeme Kaydı Bulunmayan Siparişler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Silinen Siparişler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Ödeme Sonucu Dönmeyen Siparişler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Hatalı Ödeme Kayıtları </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Magaza Satışı </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Sipariş Oluştur </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">İptal Edilen Siparişler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Sipariş Ürün Aşama Yönetimi </a>
                        </Link>
                      </nav>
                    </div>
                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseOrdersTwo" aria-expanded="false" aria-controls="collapseOrdersTwo">
                      <FaAngleDoubleRight className="me-1" /> Sipariş Bildirimleri
                      <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                    </a>
                    <div className="collapse" id="collapseOrdersTwo" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                      <nav className="sb-sidenav-menu-nested nav">
                        <Link href="#">
                          <a className="nav-link">Havale / EFT Bildirimleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Telefonla Sipariş Talepleri </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">Telefonla Onay Bekleyen Ödemeler </a>
                        </Link>
                        <Link href="#">
                          <a className="nav-link">İptal / İade Talepleri </a>
                        </Link>
                      </nav>
                    </div>
                  </nav>
                </div>

                {/* MODÜLLER YÖNETİMİ */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseModuls" aria-expanded="false" aria-controls="collapseModuls">
                  <div className="sb-nav-link-icon">
                    <FaMarkdown size={20} className="me-2" />
                  </div>
                  <span className="">Modüller</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseModuls" aria-labelledby="headingThree" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* KULLANICILAR YÖNETİMİ */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                  <div className="sb-nav-link-icon">
                    <FaUserFriends size={20} className="me-2" />
                  </div>
                  <span className="">Üyeler / Bayiler</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseUsers" aria-labelledby="headingFour" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* TASARIM YÖNETİMİ */}
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseDesign" aria-expanded="false" aria-controls="collapseDesign">
                  <div className="sb-nav-link-icon">
                    <FaPalette size={20} className="me-2" />
                  </div>
                  <span className="">Tasarım</span>
                  <div className="sb-sidenav-collapse-arrow"><FaSortDown /></div>
                </a>
                <div className="collapse" id="collapseDesign" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* SEO YÖNETİMİ */}
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
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* RAPORLAR YÖNETİMİ */}
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
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* ENTEGRASYONLAR YÖNETİMİ */}
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
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* KAMPANYALAR YÖNETİMİ */}
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
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
                    </Link>
                  </nav>
                </div>

                {/* AYARLAR YÖNETİMİ */}
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
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Ürün Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Kategori Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Marka Yönetimi</a>
                    </Link>
                    <Link href="#">
                      <a className="nav-link"><FaAngleDoubleRight className="me-1" /> Etiket Yönetimi</a>
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

/* ALT KATEGORİNİN ALT KATEGORİSİ ÖRNEK */

/*

*/