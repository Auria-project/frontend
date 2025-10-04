import { css } from "@emotion/react";

export const header = css`
  display: flex;
  width: 100vw;
  height: 7vh;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f7f7f7;
  font-weight: bold;
  font-size: 24px;
  color: #333;

  .main-logo {
    margin: 20px;
  }

  .home-btn {
    outline: none;
    border: none;
    padding: 10px 24px;
    font-weight: 500;
    border-radius: 12px;
  }
  
`;



export const body = css`
  display: flex;
  min-height: calc(100vh - 60px);
  margin: 0;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const main_container = css` //body안의 추천박스 + 팝업
  display: flex;
  width: 90vw;
  max-width: 1500px;
  height: 80vh;
  
  
`

export const rec_container = css`

  width: 65vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
    background-color: #fff;
  
`

export const grid_container = css`
  background-color: #DED3CA ;
  border-radius: 8px ;
  border: 1px solid #dbdbdb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    cursor: pointer; 
  }
`;


export const popupContainer = css` //사용 가능 공간
  width: 30vw;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dbdbdb;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #F8F4F0;
  border-radius: 12px;
  
`

export const messageBox = css` //채팅 표시 공간
  flex: 1;
  width: 100%;
  overflow-y: auto;
  margin: 10px;
`


export const messageInputContainer = css` //채팅 표시영역
  display: flex;       
  align-items: center;  
  width: 100%;
  height: 5.5vh;
  border-radius: 12px;
  background-color: #fff;
  margin: 10px 0 0;
  box-sizing: border-box;
  justify-content: space-between; // input과 버튼을 양 끝으로
  gap: 8px;            // input과 버튼 사이 간격
  padding: 0 10px;
`;

export const messageInput = css` //채팅 필드부분
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 5px;
  font-size: 14px;
  color: #555;
  
  
  &::placeholder {
    color: #aaa;
  }
`;

export const sendButton = css`
  width: 3.5vw;    // 버튼 너비 고정
  height: 2vh;   // 버튼 높이 고정
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #8c8c8c;
  font-size: 20px;
  transition: color 0.3s ease, transform 0.3s ease;
  
  
  &:hover {
    color: #4b4b4b;
    transform: scale(1.1);
  }
`;