import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #DED3CA;
`;

export const header = css`
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #CABBAF;
  box-sizing: border-box;

  & > button:nth-of-type(1) {
    display: flex;
    background-color: transparent;
    color: black;
    font-size: 30px;
    font-weight: 'bold';
    border: none;
    outline: none;
    cursor: pointer;
  }

  & > button:nth-of-type(2) {
    display: flex;
    background-color: #978e8eff;
    color: white;
    font-size: 15px;
    font-weight: 500;
    padding:8px 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
  };

  & > p {
    font-family: cursive;
    font-size: 20px;
    font-weight: bold;
  };
`;

export const body = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0 70px;
`;

export const perfume = css`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  // 향수병 그림
  & > div:nth-of-type(1) {
    position: absolute;
    left: 0;
    background-color: white;
    padding: 200px;
    border-radius: 50%;
    z-index: 1;
  };

  & > div:nth-of-type(2) {
    position: absolute;
    background-color: #DED3CA;
    right: 70px;
    padding: 20px 50px;
    border-left: 3px solid #000;
    z-index: 2;

    & > div {
      padding: 20px 0 50px 0;
      font-family: 'Times New Roman', Times, serif;
      font-size: 40px;
      font-weight: bold;
    }

    & > ul {
      overflow: hidden;

      & > li {
        & > strong {
          font-size: 15px;
        }
        & > p {
          font-size: 12px;
          margin: 5px 0 25px 0;
        }
      }
    }
  };
`;

export const chatbot = css`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > div {
    background-color: white;
    padding: 250px 150px;
    border-radius: 30px;
  };
`;
