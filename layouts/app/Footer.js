import Image from "next/image";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import BulletinCard from "../../components/home/BulletinCard";
import MobileMenu from "../../components/home/MobileMenu";
import SeoCard from "../../components/home/SeoCard";

function Footer() {
  return (
    <>
      
      <SeoCard />
      <BulletinCard />
      <div className="container-fluid bg-light border-bottom">
        <div className="row">
          <div className="col-md-4 my-3">
            <div className="card shadow">
              <div className="my-3">
                <div className="card-title d-flex justify-content-center mb-4">
                  <Image
                    src="/assets/images/kampanya.svg"
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
                <div className="card-content text-center">
                  <p className="footer-title mb-1">
                    Her siparişinize bir kampanya
                  </p>
                  <p className="footer-link mx-4">
                    MedMarket’te vereceğiniz her siparişe uygun bir kampanya
                    bulabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="card shadow">
              <div className="my-3">
                <div className="card-title d-flex justify-content-center mb-4">
                  <Image
                    src="/assets/images/teslimat.svg"
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
                <div className="card-content text-center">
                  <p className="footer-title mb-1">
                    Dakikalar içinde kapınızda
                  </p>
                  <p className="footer-link mx-5">
                    MedMarket’te siparişiniz aynı gün içinde kapınıza gelir.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-3">
            <div className="card shadow">
              <div className="my-3">
                <div className="card-title d-flex justify-content-center mb-4">
                  <Image
                    src="/assets/images/getir.svg"
                    width={120}
                    height={120}
                    alt=""
                  />
                </div>
                <div className="card-content text-center">
                  <p className="footer-title mb-1">Binlerce çeşit mutluluk</p>
                  <p className="footer-link mx-4">
                    MedMarket’te binlerce çeşit arasından seçiminizi
                    yapabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container-fluid">
          <footer className="pt-5">
            <div className="row">
              <div className="col-md-2 mb-3">
                <p className="footer-title mb-1">{`MedMarket'i`} Keşfedin</p>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Yerinden Al
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Hakkımızda
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      İletişim
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Sosyal Sorumluluk Projeleri
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-2 mb-3 footer-title">
                {/* <p className="footer-title mb-1">Yardıma mı ihtiyacınız var?</p> */}
                <p className="footer-title mb-1">{`Besoin d'aide?`}</p>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Sıkça Sorulan Sorular
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Müşteri Hizmetleri
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Kişisel Verilerin Korunması
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Kullanım Koşulları
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="footer-link nav-link p-0 text-muted">
                      Çerez Politikası
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 mb-3">
                <div className="container-fluid">
                  <p className="footer-title mb-1">Catégories Populaires</p>
                  <div className="row row-cols-2">
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Temel Gıda
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Meyve, Sebze
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Süt Ürünleri
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Kahvaltılık
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Temizlik & Deterjan
                        </a>
                      </li>
                    </ul>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Temel Gıda
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Meyve, Sebze
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Süt Ürünleri
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Kahvaltılık
                        </a>
                      </li>
                      <li className="nav-item mb-2">
                        <a
                          href="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Temizlik & Deterjan
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <form>
                  <p className="footer-title mb-1">
                    Abonnez-vous à notre newsletter
                  </p>
                  <p className="footer-link">
                    Résumé mensuel de ce qui est nouveau et excitant de notre
                    part.
                  </p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Adresse e-mail
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Adresse e-mail"
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary mt-3 " type="button">
                      {`S'abonner`}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 border-top">
              <p>MedMarket © 2022 Tous droits réservés.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaFacebookSquare color="blue" size="30" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaInstagramSquare color="#C13584" size="30" />
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <FaTwitterSquare color="#1DA1F2" size="30" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
      <MobileMenu />
    </>
  );
}

export default Footer;
