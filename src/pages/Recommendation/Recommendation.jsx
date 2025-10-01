/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import { useNavigate } from "react-router-dom";

function Recommendation() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div css={s.header}>
        <span class="main-logo">Auria</span>
        <button class="home-btn" onClick={() => navigate("/")}>Home 화면으로 가기</button>
      </div>
      <div css={s.body}>
        <div css={s.main_container}>
          <div css={s.rec_container}>
            <div css={s.grid_container}></div>
            <div css={s.grid_container}></div>
            <div css={s.grid_container}></div>
            <div css={s.grid_container}></div>
          </div>

          <div css={s.popupContainer}>
            <div css={s.messageBox}>  
            </div>

            <div css={s.messageInputContainer}>
              <input
                css={s.messageInput}
                type="text"
                placeholder="나만의 향수를 만들어보세요"
              />
              <button css={s.sendButton}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;