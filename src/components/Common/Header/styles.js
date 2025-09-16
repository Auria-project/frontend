import { css } from "@emotion/react";

export const header = css`
  height: 10vh;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;

      & > li {
        color: #333;
        cursor: pointer;

        & > a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
`;

export const logoContainer = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const logoImage = css`
  height: 200px;
  width: auto;
`;

export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-sizing: border-box;
`;

export const loginButton = css`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #4b382a;
  padding: 0.3rem 0.8rem;
  border: 1.5px solid #a68a7d;
  border-radius: 20px;
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #a68a7d;
    color: #fcfaf7;
  }
`;

export const signupButton = css`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #4b382a;
  padding: 0.3rem 0.8rem;
  border: 1.5px solid #4b382a;
  border-radius: 20px;
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4b382a;
    color: #fcfaf7;
  }
`;
