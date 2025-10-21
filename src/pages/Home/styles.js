import { keyframes, css } from "@emotion/react";


/* Fade-in-up 애니메이션 */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(0.9vh);}
  100% { opacity: 1; transform: translateY(0);}
`;

/* 전체 컨테이너 */
export const container = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2vw;
  width: 100vw;
  height: 90vh;
  box-sizing: border-box;
  padding: 3vh 1vw;
  background-color: #ded3ca;
  font-family: "Didot", serif;
  color: #3d2c2f;
`;

/* 왼쪽 향수 그룹 컨테이너 */
export const groupContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  border: 0.1rem solid #a68a7d;
  background: #f9f7f5;
  border-radius: 1.25rem;
  box-sizing: border-box;
  width: 65vw;
  height: 100%;
  padding: 2.31vh 1vw;
  overflow: hidden;

`;

export const largeTitle = css`
  font-family: "Didot", serif;
  font-size: 2vw;
  font-weight: 700;
  color: #4b382a;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-bottom: 1vh;
`;

export const thumbnailsWrapper = css`
  display: flex;
  gap: 1vw;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  overflow: hidden;
`;

/* 애니메이션 공통 */
const boxAppear = css`
  opacity: 0;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

export const box1Animate = css`
  ${boxAppear};
  animation-delay: 0.2s;
`;

export const box2Animate = css`
  ${boxAppear};
  animation-delay: 1.93s;
`;

export const box3Animate = css`
  ${boxAppear};
  animation-delay: 3.66s;
`;

export const box = css`
  min-width: 0;
  width: 17vw;
  max-width: 17vw;
  height: 60vh;
  margin: 0;
  border: 0.1rem solid #a68a7d;
  background: #fff9f7;
  border-radius: 2vw;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(210, 199, 190, 0.25);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
              border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);


  &:hover {
    transform: scale(1.07);
    border-color: #d4af37;
    background-color: #fffaf0;
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4),
                0 4px 15px rgba(210, 199, 190, 0.4);
  }
`;

export const boxTitle = css`
  font-family: "Playfair Display", serif;
  font-size: 1.5vw;
  font-weight: 600;
  letter-spacing: 0.12em;
  margin: 5vh 0;
  color: #4b382a;
  text-align: center;
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const boxDescription = css`
  font-family: "Georgia", serif;
  font-size: 1.3rem;
  color: #6e5c52;
  text-align: center;
  line-height: 1.6em;
  margin-top: auto;
  padding: 0 2rem 2rem 2rem;
`;

export const largeBox = css`
  border: 1.5px solid #a68a7d;
  background: #fcfaf7;
  border-radius: 1.5vw;
  height: 100%;
  width: 30vw;
  box-sizing: border-box;
  padding: 5vh 3vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 15px #fffefc, 0 0 18px 2px rgba(166, 138, 125, 0.3);
  position: relative;
`;

/* 글자 순차 등장 */
export const charAnimate = (index) => css`
  opacity: 0;
  display: inline-block;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-delay: ${index * 0.09}s;
`;

export const chatContainer = css`
  flex: 1;
  overflow-y: auto;
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const chatMessage = css`
  max-width: 70%;
  padding: 1.8vh 1.5vw;
  border-radius: 20px;
  font-family: "Georgia", serif;
  font-size: 2vh;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  word-break: break-word;
`;

export const userMsg = css`
  align-self: flex-end;
  background-color: #ffeaa7;
  color: #6a4f4b;
  border-bottom-right-radius: 0;
`;

export const botMsg = css`
  align-self: flex-start;
  background-color: #f1e6d0;
  color: #4b382a;
  border-bottom-left-radius: 0;
`;

export const inputArea = css`
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 1vh;
  padding: 2vh 0;
  background-color: #fcfaf7;
  border-top: 0.1rem solid #a68a7d;
  box-sizing: border-box;
  width: 100%;
  margin-top: auto;
  z-index: 10;
`;

export const inputField = css`
  flex: 1;
  padding: 1.8vh 1.5vw;
  font-size: 1vw;
  border: 0.1rem solid #a68a7d;
  border-radius: 1.8vw 0 0 1.8vw;
  outline: none;
  font-family: "Didot", serif;
  color: #3d2c2f;

  &:focus {
    border-color: #9f8550;
  }
`;

export const sendButton = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a68a7d;
  border: none;
  border-radius: 0 1.8vw 1.8vw 0;
  color: #fcfaf7;
  font-family: "Didot", serif;
  font-weight: 600;
  font-size: 1vw;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9f8550;
  }
`;

export const popup_overlay = css`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 90vh;
 
  background-color: rgba(0,0,0,0.4);

  justify-content: center;
  align-items: center;
  z-index: 1000;
  

`

export const content = css`
  background-color: #fff;
  max-width: 90vw;
  max-height: 90vh;
  padding: 1.5rem 2.2rem;
  position: relative;
  overflow-y: auto;
  box-shadow: 0 8px 26px rgb(115 93 78 / 0.3);
  user-select:none;
  border-radius: 1.25rem;
  position: relative;

  
  border: 2px solid blue; /* 디버그용! */
`

export const top_perfume_card = css`
  
  margin-bottom: 1.25rem;
  text-align: center;

  
`

export const topPerfumeCardImg = css`
  
  width: 10vw;
  opacity: 0.7;
  height: auto;
  margin-bottom: 0.75rem;


`

export const seasonCardGrid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

`

export const seasonCard = css`
  background: #f7f0e7;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
        






  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 12px 30px rgb(115 93 78 / 0.4);
  }
`;

export const title = css`
  font-size: 1.2rem;
  font-weight: 700;
  color: #9c8a7a;
  margin-bottom: 0.5vw;
  
      

`

export const subtitle = css`
  font-size: 1.4rem;
  font-weight: 600;
  color: #735d4e;
  margin-bottom: 0.5vw;
  
`

export const details = css`
  font-size: 1rem;
  line-height: 1.4;
  color: #9c8a7a;

`
export const btn = css`
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8vh; 
`

export const closeBtn = css`
  
 
  
  font-size: 1rem;
  border: none ;
  background: transparent;
  cursor: pointer;
  color: #735d4e;
  user-select: none;
  line-height: 1;
  padding: 0.2vh 0.3vw;
  transition: color 0.3s ease;
  z-index: 1000;

  

  &:hover {
    color: #9c8a7a;
  }
`

export const applyBtn = css`
  font-family: 'Noto Sans', 'Apple SD Gothic Neo', Arial, sans-serif;
  font-size: 1.1rem;
  border-radius: 1.2vh;
  border: none;
  cursor: pointer;
  padding: 0 0.3vw;
  transition: color 0.3s ease;
  z-index: 100;
  background-color: #dbcfc5;
  color: #6f6051;
  padding: 0.7vh;

  
  

  &:hover {
    color:#8d7563;
  }
`

