import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const header = css`
  flex: 1;
`;

export const body = css`
  flex: 3;
  display: flex;
  flex-direction: row;
  background-color: white;
  gap: 100px;
`;

export const profile = css`
  display: flex;
  position: absolute;
  width: 300px;
  height: 550px;
  top: 15vh;
  left: 22vw;
  border: 1px solid #000;
  background-color: white;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    border-radius: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
  }
`;

export const writeBox = css`
  display: flex;
  position: absolute;
  width: 700px;
  height: 550px;
  top: 15vh;
  right: 5vw;
  border: 1px solid #000;
  background-color: white;
  align-items: center;
  flex-direction: column;
`;