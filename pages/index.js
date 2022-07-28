import { MdShoppingCart, MdSpa, MdPayments, MdLocalShipping } from "react-icons/md";
import AppLayout from "../layouts/app/AppLayout";
import Image from "next/image";


function HomeIndex() {
return (

    <AppLayout title={"Deneme"} desc="deneme">
      <Image src="/assets/images/banner1.jpg" width={1430} height={264} alt="" />
      
      <div className="container pt-5">
        <div className="row">
          <div className="col-3 d-flex">
            <MdShoppingCart size={40} />
            <div className="">
              <p className="info-card-title">Hızlı Alışveriş</p>
              <p className="info-card-desc">Bir tıkla sepetiniz kapınızda</p>
            </div>
          </div>
          <div className="col-3 d-flex">
            <MdSpa size={40} className="me-1" />
            <div className="">
              <p className="info-card-title">Özenle Seçilmiş</p>
              <p className="info-card-desc">Sebze ve Meyve Ürünleri</p>
            </div>
          </div>
          <div className="col-3 d-flex">
            <MdPayments size={40} className="me-2" />
            <div className="">
              <p className="info-card-title">Esnek Ödeme</p>
              <p className="info-card-desc">İster Nakit İster Kredi Kartı</p>
            </div>
          </div>
          <div className="col-3 d-flex">
            <MdLocalShipping size={40} className="me-2" />
            <div className="">
              <p className="info-card-title">Hızlı Teslimat</p>
              <p className="info-card-desc">İstediğiniz Saatte Teslimat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-3">
            <Image src="/assets/images/meyve_sebze.png" width={275} height={280} alt="" />
          </div>
          <div className="col-3">
            <Image src="/assets/images/et_tavuk.png" width={275} height={280} alt="" />
          </div>
          <div className="col-3">
            <Image src="/assets/images/sut_kahvaltilik.png" width={275} height={280} alt="" />
          </div>
          <div className="col-3">
            <Image src="/assets/images/icecekler.png" width={275} height={280} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <Image src="/assets/images/petshop.png" width={1180} height={131} alt="" />
      </div>

      <div className="container-fluid py-5">
        <Image src="/assets/images/kampanya-gorsel-kedi-1300x130.png" width={1300} height={130} alt="" />
      </div>
    </AppLayout>

  ) 
}

export default HomeIndex;

/*
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mainDivStyle = {
    padding: "1em",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);

    console.log(user);
  };

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");

    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };

  return (
    <div style={mainDivStyle}>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password"> Username </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button> Log in </button>
      </form>

      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
}

*/