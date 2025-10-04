import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const profile = css`
  display: flex;
  position: absolute;
  width: 20vw;
  height: 62vh;
  top: 15vh;
  left: 22vw;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  align-items: center;
  flex-direction: column;

  // 프로필 사진 부분
  & > div:nth-of-type(1) {
    width: 12vw;
    height: 20vh;
    border: 1px solid #000;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // 카메라 모양
  & > div:nth-of-type(2) {
    position: absolute;
    top: 200px;
    right: 55px;
    background-color: #333;
    padding: 8px;
    border: 2px solid white;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 연필
  & > div:nth-of-type(3) {
    border: 1px solid #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const writeBox = css`
  display: flex;
  position: absolute;
  width: 50vw;
  height: 62vh;
  top: 15vh;
  right: 5vw;
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  flex-direction: row;

  & > ul:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    & > li {
      padding: 10px;
      margin: 30px 0px;

      & > p {
        font-size: 15px;
        margin: 10;
      }

      & > input {
        padding: 10px;
        border: 1px solid #333;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 15px;
      }
    }
  }

  & > ul:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;

    & > li {
      padding: 10px;
      margin: 30px 0px;

      & > p {
        font-size: 15px;
        margin: 10;
      }

      & > input {
        padding: 10px;
        border: 1px solid #333;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 15px;
      }
    }
  }
`;

// 성별 선택 버튼
export const genderBtn = (isSelected) => css`
  display: inline-block;
  padding: 7.5px 20px;
  margin-right: 32.65px;
  border: 1px solid #333;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: ${isSelected ? "#978E8E" : "white"};
  color: ${isSelected ? "white" : "#978E8E"};
  border-color: #978E8E;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${isSelected ? "#978E8E" : "#f1f1f1"};
  }

  &:active {
    background-color: #978E8E;
    border-color: #978E8E;
    transform: scale(0.98);
  }
`;

export const hiddenRadio = css`
  display: none;
`;