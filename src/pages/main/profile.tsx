import Header from "../common/header";
import React, { useState, useEffect, ReactNode } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { useParams, useRouteMatch } from "react-router-dom";
import ProfileInfo from "../../components/Profile";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.scss";
type PageProps = {
  children: React.ReactNode | void;
};

interface PathParamsProps {
  id: string;
}

type ProfileCount = {
  followCount: number;
  postsCount: number;
  followingCount: number;
  memberIntroduce: string;
  memberUserNick: string;
  memberImageUrl: string;
};

const Profile = ({ children }: PageProps): ReactNode => {
  const match = useRouteMatch<PathParamsProps>("/:id");
  const [userInfo, setUserInfo] = useState<ProfileCount>();

  const selProfileCnt = async () => {
    await axios
      .post<ProfileCount>("/api/v1/posts/selMyProfileCnt", {
        memberId: match?.params.id,
      })
      .then((response: AxiosResponse<ProfileCount>) => {
        setUserInfo(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  };

  useEffect(() => {
    (async () => {
      await selProfileCnt();
    })();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="profile-root">
        <div className="profile-wrap" style={{ width: "1500px" }}>
          <div className="profile-header-wrap">
            <div className="profile-img-wrap">
              <img
                src={
                  userInfo?.memberImageUrl === null
                    ? "img/ig_profile.jpeg"
                    : userInfo?.memberImageUrl
                }
                alt="logo"
              ></img>
            </div>
            <div className="profile-intro-wrap">
              <div className="profile-name">
                <div className="name">{userInfo?.memberUserNick}</div>
                <div className="edit">
                  <button>프로필 편집</button>{" "}
                </div>
              </div>
              <div className="profile-count">
                <div>
                  게시물 &nbsp;
                  <span style={{ fontWeight: 500 }}>
                    {userInfo?.postsCount}
                  </span>
                </div>
                <div>
                  팔로워 &nbsp;{" "}
                  <span style={{ fontWeight: 500 }}>
                    {userInfo?.followingCount}
                  </span>
                </div>
                <div>
                  팔로우 &nbsp;{" "}
                  <span style={{ fontWeight: 500 }}>
                    {" "}
                    {userInfo?.followCount}
                  </span>
                </div>
              </div>
              <div>
                <div>{userInfo?.memberIntroduce}</div>
              </div>
            </div>
          </div>

          <ProfileInfo>{children}</ProfileInfo>
        </div>
      </div>
    </>
  );
};
export default Profile;
