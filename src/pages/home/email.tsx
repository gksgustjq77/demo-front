import "./email.scss";
import { useLocation, useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
interface CustomizedState {
  props: {
    userId: string;
  };
}
const Email = () => {
  const [authCode, setAuthCode] = useState("");
  const location = useLocation();
  const navi = useHistory();
  const props = location.state as CustomizedState;

  const next = () => {
    axios
      .post("/api/v1/mail/verifi", {
        memberUserName: props.props.userId,
        memberAuthCode: authCode,
      })
      .then((res) => {
        if (res.data.code === "success") {
          navi.push("/", { replace: true });
        }
      });
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value);
  };
  return (
    <>
      <div>
        <div className="email-root">
          <div className="email-wrap">
            <div className="email-img-wrap"></div>
            <span className="ment">인증 코드 입력</span>
            <div className="description1">
              {props.props.userId} 주소로 전송된 인증 코드를 입력하세요.
              <span>코드 재전송</span>
            </div>

            <div className="input-wrap">
              <input
                type="text"
                placeholder="인증코드"
                onChange={change}
              ></input>
              <button onClick={next}>다음</button>
              <div className="back-ment">돌아가기</div>
            </div>
          </div>
          <div className="login-wrap">
            계정이 있으신가요?{" "}
            <Link to="/home/home">
              <span>로그인</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Email;
