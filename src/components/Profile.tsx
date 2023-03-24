import React, { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./profile.scss";
type PageProps = {
  children: React.ReactNode | void;
};
const Profile = (props: PageProps): JSX.Element => {
  type ParamType = {
    id: string;
  };

  type ParamsType = {
    memberId: string;
    postId: number;
    postContent: string;
    postImageUrl: string;
  };

  type UserPosts = {
    data: ParamsType[];
  };

  const [userInfo, setUserInfo] = useState<[] | ParamsType[]>([]);
  const [isActive, setIsAtive] = useState("1");
  const { id } = useParams<ParamType>();

  const axiosCall = async (): Promise<ParamsType[]> => {
    const res = await axios.post<UserPosts>("/api/v1/posts/selMyPostLst", {
      memberId: id,
    });

    return res.data.data;
  };

  useEffect(() => {
    (async () => {
      const data = await axiosCall();
      setUserInfo(data);
    })();
  }, []);

  return (
    <>
      <div className="content-wrap">
        <div style={{ marginBottom: "50px" }}>
          <span
            className={`content-text ${isActive === "1" ? "active" : ""}`}
            onClick={() => setIsAtive("1")}
          >
            <p
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="img/free-icon-post.png"
                style={{ marginRight: "5px" }}
              ></img>
              게시물
            </p>
          </span>
          <span
            className={`content-text ${isActive === "2" ? "active" : ""}`}
            onClick={() => setIsAtive("2")}
          >
            <p
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <img
                src="img/free-icon-share.png"
                style={{ marginRight: "5px", width: "25px", height: "25px" }}
              ></img>
              태그됨
            </p>
          </span>
        </div>
      </div>

      <div className="feed">
        {userInfo.map((data: ParamsType) => (
          <div className="image">
            <img src={data.postImageUrl} alt="logo" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Profile;
