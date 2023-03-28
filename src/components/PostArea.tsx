import "./PostArea.scss";
import axios from "axios";
import { formatDate, truncateString, combineStrings } from "../common/common";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, ReactNode } from "react";
import { Link } from "react-router-dom";
import { CommentArea } from "./CommentArea";
// import os from '../pages/common/axios';
type PostsType = {
  postId: number;
  postImageId: number;
  postUploadDate: string;
  postImageUrl: string;
  memberUserName: string;
  memberUserNick: string;
  memberId: number;
  memberImageUrl: string;
  postContent: string;
  hashtagName: string;
  hashtagArr: Array<string>;
};

type Posts = {
  data: PostsType[];
};

const PostArea = () => {
  const [posts, setPosts] = useState<[] | PostsType[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const renderContent = (content: string) => {
    if (content.length <= 20) {
      return content;
    }

    if (!isExpanded) {
      return `${content.slice(0, 20)}...`;
    }

    return content;
  };

  const renderToggleBtn = (content: string) => {
    if (content.length <= 20) {
      return null;
    }

    return (
      <span className="more" onClick={toggleExpanded}>
        {isExpanded ? "" : "더 보기"}
      </span>
    );
  };
  const axiosCall = async (): Promise<PostsType[]> => {
    const res = await axios.post<Posts>("/api/v1/posts/selPostLst", {
      memberId: sessionStorage.getItem("memberId"),
    });

    return res.data.data;
  };

  useEffect(() => {
    (async () => {
      const data = await axiosCall();
      data.map((e) => {
        if (e.hashtagName !== null) {
          const str: string = e.hashtagName;
          const arr: string[] = str.split(",");
          e.hashtagArr = arr;
        }
      });

      setPosts(data);
    })();
  }, []);

  return (
    <>
      <div className="post-wrap">
        <div className="post-content">
          {posts.map((data: PostsType) => (
            <div className="post-image" key={data.postId}>
              <div className="post-header">
                <img
                  src={
                    data.memberImageUrl
                      ? data.memberImageUrl
                      : "../img/profile.png"
                  }
                  className="profile"
                  alt="logo"
                />
                <div className="post-user">
                  <span className="user-nick">{data.memberUserNick}</span>
                  <span className="post-location">강남구</span>
                </div>
                &nbsp;
                <div className="post-time">
                  <span className="etc">•</span>&nbsp;
                  <span className="time">
                    {formatDate(data.postUploadDate)}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <span style={{ cursor: "pointer" }}>•••</span>
                </div>
              </div>

              <div className="post-in">
                <div className="post-image-border">
                  <img src={data.postImageUrl}></img>
                </div>
                {/* <video autoPlay controls>
                  <source
                    src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
                    type="video/mp4"
                  />
                  <source
                    src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
                    type="video/ogg"
                  />
                </video> */}
              </div>

              <div className="post-option">
                <img
                  className="post-icon"
                  src="../img/free-icon-heart.png"
                  alt=""
                ></img>
                <img className="post-icon" src="../img/chat.png" alt=""></img>
                <img
                  className="post-icon"
                  src="../img/free-icon-send.png"
                  alt=""
                ></img>
              </div>

              <div className="post-like">
                <span>좋아요 300개 {}</span>
              </div>

              <div className="post-ment">
                <span className="user-name">{data.memberUserNick}</span>
                <span className="content">
                  {renderContent(data.postContent)}
                  &nbsp;
                  <span className="hashtags">
                    {isExpanded &&
                      data.hashtagArr &&
                      data.hashtagArr.map((data: string) => (
                        <a href="https://www.naver.com" key={data}>
                          {data}
                        </a>
                      ))}
                  </span>
                  <span className="hashtags">
                    {data.postContent.length < 10 &&
                      data.hashtagArr &&
                      data.hashtagArr.map((data: string) => (
                        <a key={data}>{data}</a>
                      ))}
                  </span>
                </span>

                {data.postContent.length > 20 ? (
                  <span className="more">
                    {renderToggleBtn(data.postContent)}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <CommentArea></CommentArea>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default PostArea;
