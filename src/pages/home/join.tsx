import Footer from "../common/footer";
import "./join.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useState, useMemo, useCallback } from "react";
import axios from "axios";
const Join = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    userName: "",
    userNick: "",
    userPass: "",
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value = "", name = "" } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const join = async () => {
    axios.post("/api/v1/member/join", {
      memberUserName: inputs.userId,
      memberName: inputs.userName,
      memberUserNick: inputs.userNick,
      memberPassword: inputs.userPass,
    });
  };

  return (
    <>
      <div>
        <div className="join-root">
          <div className="join-wrap">
            <div className="img-wrap">
              <img
                src="/img/instagram_logo.png"
                alt="logo"
                className="logo-image"
              />
              <span className="ment">
                친구들의 사진과 동영상을 보려면 가입하세요.
              </span>
              <button>
                {" "}
                <img src="/img/face.png" alt="logo" />
                Facebook으로 로그인
              </button>
            </div>
            <div className="etc-wrap">
              <div className="etc1"></div>
              <div className="etc2">또는</div>
              <div className="etc3"></div>
            </div>

            <div className="input-wrap">
              <input
                type="text"
                name="userId"
                value={inputs.userId}
                onChange={change}
                placeholder="이메일 주소"
              ></input>
              <input
                type="text"
                name="userName"
                onChange={change}
                value={inputs.userName}
                placeholder="성명"
              ></input>
              <input
                type="text"
                name="userNick"
                value={inputs.userNick}
                onChange={change}
                placeholder="사용자 이름"
              ></input>
              <input
                type="text"
                name="userPass"
                onChange={change}
                value={inputs.userPass}
                placeholder="비밀번호"
              ></input>
            </div>

            <div className="ment1">
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
              업로드했을 수도 있습니다. <a href="">더 알아보기</a>
            </div>

            <div className="join-btn">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home/email"
                state={inputs}
              >
                <button className="join" onClick={join}>
                  가입
                </button>
              </Link>
            </div>
          </div>

          <div className="login-wrap">
            계정이 있으신가요?{" "}
            <Link to="/home/home">
              <span>로그인</span>
            </Link>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Join;
