
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Script from "next/script";
import store from '../store/store';
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';


function App({ Component, pageProps }) {
  //const Layout = Component.Layout ? Component.Layout : React.Fragment;

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min') : null
  }, [])

  return (
      <Provider store={store}>
         <Component {...pageProps} />
        <Script src="/assets/js/meka.js"></Script>
      </Provider>
  )
}

export default App;



