/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
  FaBars,
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
  FaCogs
} from 'react-icons/fa'


const AdminLayout = ({ children }) => {
  return (
    <>
      {/* <Head>
        <link href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css" />
      </Head> */}
      <div className="adminp-body">
        <div className="d-flex" id="wrapper">
          <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light fs-5 fw-semibold">
              MedMarket
            </div>
            <div className="list-group list-group-flush">
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaHome size={20} className="me-2" />
                    <span className="">Anasayfa</span>

                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaFolder size={20} className="me-2" />
                    <span className="">Ürünler</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaList size={20} className="me-2" />
                    <span className="">Siparişler</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaMarkdown size={20} className="me-2" />
                    <span className="">Modüller</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaUserFriends size={20} className="me-2" />
                    <span className="">Üyeler / Bayiler</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaPalette size={20} className="me-2" />
                    <span className="">Tasarım</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaRocket size={20} className="me-2" />
                    <span className="">SEO</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaChartPie size={20} className="me-2" />
                    <span className="">Raporlar</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaStackExchange size={20} className="me-2" />
                    <span className="">Entegrasyonlar</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaSpinner size={20} className="me-2" />
                    <span className="">Kampanyalar</span>
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <a className="list-group-item list-group-item-action list-group-item-light p-3">
                    <FaCogs size={20} className="me-2" />
                    <span className="">Ayarlar</span>
                  </a>
                </Link>
              </li>
            </div>
          </div>



          <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <div className="container-fluid d-flex">
                <button className="btn btn-primary" id="sidebarToggle">
                  <FaHome size={22} />
                  </button>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item active"><a className="nav-link" href="#!">Dil</a></li>
                    <li className="nav-item active"><a className="nav-link" href="#!">Dil</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">Bildirimler</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Image src="https://github.com/mdo.png" alt="mdo" width="26" height="26" className="rounded-circle p-0 m-0" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#!">Action</a>
                        <a className="dropdown-item" href="#!">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#!">Something else here</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="container-fluid">
              {children}
            </div>
          </div>
        </div>
      </div>

     {/*  <Script charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js" />
      <Script charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" />
      <Script charset="utf8" src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js" /> */}

      {/*  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
      <script type="text/javascript" src="https://cdn.datatables.net/v/bs5/jszip-2.5.0/dt-1.12.1/af-2.4.0/b-2.2.3/b-colvis-2.2.3/b-html5-2.2.3/b-print-2.2.3/cr-1.5.6/date-1.1.2/fc-4.1.0/fh-3.2.4/kt-2.7.0/r-2.3.0/rg-1.2.0/rr-1.2.8/sc-2.0.7/sb-1.3.4/sp-2.0.2/sl-1.4.0/sr-1.1.1/datatables.min.js"></script> */}
    </>
  );
};

export default AdminLayout;