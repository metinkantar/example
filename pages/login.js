import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import AppLayout from "../layouts/app/AppLayout";
import { setUser } from "../store/controllers/auth";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";
import { serialize } from "cookie";

const API_URL = process.env.API_URL;

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    console.log("submitHandler -> tıklandı");
    console.log(email, password);
    axios
      .post("/api/auth/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.token)
          );
        }
        dispatch(
          setUser({
            isLoggedIn: true,
            isAdmin: response.data.isAdmin,
            token: response.data.token,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
    router.push("/");
  }

  return (
    <AppLayout title="Giriş Yap" desc="Giriş Yap">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <Image
                          src="/assets/images/logo.png"
                          width={90}
                          height={90}
                          alt=""
                        />
                      </div>
                    </div>
                    <h3 className="text-center font-weight-light my-2">
                      Oturum Aç
                    </h3>
                    {/* <h5>{`isLoggedIn var mı : ${isLoggedIn}`}</h5> */}
                  </div>
                  <div className="card-body">
                    <form action="post" onSubmit={handleSubmit(submitHandler)}>
                      <div className="form-floating mb-2">
                        <input
                          className="form-control"
                          id="inputEmail"
                          type="email"
                          {...register("email", {
                            required: "Lütfen e-posta giriniz",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                              message: "Lütfen geçerli bir e-posta girin",
                            },
                          })}
                          name="email"
                          placeholder="meka@example.com"
                          autoFocus
                        />
                        <label htmlFor="inputEmail">E-posta</label>
                        {errors.email && (
                          <div className="text-dark fw-semibold">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="form-floating mb-2">
                        <input
                          className="form-control"
                          id="inputPassword"
                          type="password"
                          {...register("password", {
                            required: "Lütfen şifreninizi giriniz",
                            minLength: {
                              value: 6,
                              message: "şifre 5 karakterden az olamaz",
                            },
                          })}
                          name="password"
                          placeholder="Parola"
                        />
                        <label htmlFor="inputPassword">Parola</label>
                        {errors.email && (
                          <div className="text-dark fw-semibold">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          id="inputRememberPassword"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inputRememberPassword"
                        >
                          Beni Hatırla
                        </label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password.html">
                          Şifre mi Unuttum?
                        </a>
                        <button
                          className="btn btn-primary text-white"
                          id="liveToast"
                        >
                          Giriş Yap
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <span className="text-small">Henüz üye değil misin?</span>
                    <Link href={`/register?redirect=${"/"}`}> Kayıt Ol</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <Image
              src="/assets/images/logo.png"
              className="rounded me-2"
              alt="..."
              width={40}
              height={40}
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default LoginPage;

/*
<div className="login-main">
      <div className="container">
        <main className="form-signin w-100 m-auto">
          <form action='post' onSubmit={handleSubmit}>
           
            <div className="row">
              <div className="col d-flex justify-content-center">
                <h1 className="h3 mb-3 fw-bold">Oturum Aç</h1>
              </div>
            </div>
            <div className="form-floating">
              <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">E-Posta</label>
            </div>
            <div className="form-floating">
              <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Parola</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Beni Hatırla
              </label>
            </div>
            <button className="w-100 btn btn-warning" type="submit">loading ? "Giriş Yapılıyor..." : "Giriş Yap" </button >
  <div className="row">
    <div className="col d-flex justify-content-center">
      <p className="mt-5 mb-3 text-muted">&copy; MeKaCoDe // 2022</p>
    </div>
  </div>
          </form >
        </main >
      </div >
    </div >
*/
