import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  // HOC: High order component 두개 이상의 함수를 받아서 하나의 컴포넌트로 만드는 것
  const handleEnter = search => e => {
    // search = props.onSearchVideos search에 함수를 받는다.
    // props.onSearchVideos(e)와 동일하게 동작
    // 이벤트 핸들러를 리턴해준다
    if (e.key === 'enter') {
      search(e.target.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => props.setInput(e.target.value)}
        onKeyPress={handleEnter(props.onSearchVideos)}
        className="search-bar"
        placeholder="검색" />
      <button type="button">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon"
          style={{
            pointerEvents: "none",
            display: "block",
            width: "30px",
            height: "30px"}}>
          <g className="style-scope yt-icon">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              className="style-scope yt-icon"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;