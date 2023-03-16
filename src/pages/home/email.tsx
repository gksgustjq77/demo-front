import "./email.scss";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
const Email = () => {
  const location = useLocation();
  const props = location.state;
  console.log(props);

  const next = () => {};
  return (
    <>
      <div>
        <div className="email-root">
          <div className="email-wrap">
            <div className="email-img-wrap"></div>
            <span className="ment">인증 코드 입력</span>
            <div className="description1">
              {props.userId} 주소로 전송된 인증 코드를 입력하세요.
              <span>코드 재전송</span>
            </div>

            <div className="input-wrap">
              <input type="text" placeholder="인증코드"></input>
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
