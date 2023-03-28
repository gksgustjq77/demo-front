import "./home.scss";
import os from "../common/axios.js";
import axios from "axios";
import React, { useState, useMemo, useCallback } from "react";
import Footer from "../common/footer";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

const Home = () => {
  const navi = useHistory();
  const [inputs, setInputs] = useState({
    memberUserName: "",
    memberPassword: "",
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value = "", name = "" } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const loginClick = async () => {
    await axios
      .post("/api/v1/member/login", {
        memberUserName: inputs.memberUserName,
        memberPassword: inputs.memberPassword,
      })
      .then((res) => {
        if (res.data.result.code === "success") {
          sessionStorage.setItem("loginId", res.data.data.memberUserName);
          sessionStorage.setItem("memberId", res.data.data.memberId);
          navi.push("/main/profile");
        }
      });
  };

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
                    name="memberUserName"
                    onChange={change}
                    value={inputs.memberUserName}
                    placeholder="이메일"
                  ></input>
                  <input
                    type="text"
                    name="memberPassword"
                    placeholder="비밀번호"
                    value={inputs.memberPassword}
                    onChange={change}
                  ></input>
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
