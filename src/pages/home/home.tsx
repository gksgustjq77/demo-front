import React from "react";
import "./home.scss";
import os from "../common/axios.js";
import axios from "axios";
import Footer from "../common/footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const loginClick = async () => {
  await axios.post("/api/v1/member/login", {
    userId: "ddd",
    pass: "111",
  });
};
const Home = () => {
  return (
    <>
      <div>
        <div className="root">
          <div className="main-wrap">
            {" "}
            <img src="img/screenshot1.png" alt="logo" className="in-image" />
          </div>
          <div className="right-wrap">
            <div className="member-wrap">
              <div className="login-wrap">
                <img
                  src="img/instagram_logo.png"
                  alt="logo"
                  className="logo-image"
                />
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  ></input>
                  <input type="text" placeholder="비밀번호"></input>
                  <button onClick={loginClick}>로그인</button>
                </div>

                <div className="password-wrap">
                  <span>비밀번호를 잊으셨나요?</span>
                </div>
              </div>
            </div>
            <div className="join-wrap">
              계정이 없으신가요?{" "}
              <Link to="/home/join">
                <span>가입하기</span>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
