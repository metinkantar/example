import Head from 'next/head';
import Link from 'next/link';
import MainHeader from '../../components/home/MainHeader';
import MainCategory from '../../components/home/MainCategory';

function Header() {
  return (
    <>
      
      <div className='container-fluid bg-light'>
        <div className="row">
          <div className="col-4 d-flex justify-content-start gap-2">
            <Link href="#" passHref>
              <a className="top-brand-title">Magazalar</a>
            </Link>
            <Link href="#" passHref>
              <a className="top-brand-title">Teslimat Bölgeleri</a>
            </Link>
          </div>
          <div className="col-8 d-flex justify-content-end gap-2">
          <Link href="#" passHref>
              <a className="top-brand-title">Siparişlerim</a>
            </Link>
            <Link href="#" passHref>
              <a className="top-brand-title">Kurumsal</a>
            </Link>
            <Link href="#" passHref>
              <a className="top-brand-title">İletişim</a>
            </Link>
          </div>
        </div>
      </div>
      <MainHeader />
      <MainCategory />      
    </>
  );
}

export default Header;

