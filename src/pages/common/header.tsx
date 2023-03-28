import "./header.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <>
      <div>
        <div className="header-wrap">
          <div className="image-wrap">
            <img src="../img/instagram_logo.png" alt="logo"></img>
          </div>

          <div className="input-wrap">
            <FontAwesomeIcon icon={faSearch} size="1x" />
            <input placeholder="검색"></input>
          </div>

          <div className="icon-wrap">
            <img
              src="../img/free-icon-home.png"
              alt="logo"
              onClick={() => (window.location.href = "/main/posts")}
              style={{ width: "37px", height: "33px", cursor: "pointer" }}
            ></img>
            <img
              src="../img/free-icon-send.png"
              alt="logo"
              style={{ width: "37px", height: "33px" }}
            ></img>
            <img
              src="../img/free-icon-heart.png"
              alt="logo"
              style={{ width: "37px", height: "33px" }}
            ></img>
            <img
              src="../img/profile.png"
              alt="logo"
              style={{ width: "37px", height: "33px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
