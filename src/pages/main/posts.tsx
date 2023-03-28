import Header from "../common/header";
import PostArea from "../../components/PostArea";
import StoryHeader from "../../components/StoryHeader";

import "./posts.scss";
const Posts = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <div>
        <StoryHeader></StoryHeader>
        <PostArea></PostArea>
      </div>
    </>
  );
};
export default Posts;
