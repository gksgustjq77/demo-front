import "./storyHeader.scss";

const StoryHeader = (): JSX.Element => {
  return (
    <>
      <div className="stories-root">
        <div className="instagram-stories">
          {/* 받아온 stories 데이터를 이용하여 스토리 썸네일을 구성합니다. */}
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-1"
            ></img>
            <span className="story-caption">Story Story 11</span>
          </div>
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-2"
            ></img>
            <span className="story-caption">Story 2</span>
          </div>
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-2"
            ></img>
            <span className="story-caption">Story 2</span>
          </div>
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-3"
            ></img>
            <span className="story-caption">Story 3</span>
          </div>
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-4"
            ></img>
            <span className="story-caption">Story 4</span>
          </div>
          <div className="story-thumbnail">
            <img
              src="https://blog.kakaocdn.net/dn/bODuJZ/btqYE8gl104/f9krk9mpcr86yozItPJ6NK/img.jpg"
              alt="story-5"
            ></img>
            <span className="story-caption">Story 5</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryHeader;
