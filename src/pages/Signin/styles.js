import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(222, 211, 202, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalContainer = css`
  background: linear-gradient(135deg, #fdf6ed 80%, #e3d6c8 100%);
  border: none;
  border-radius: 24px;
  width: 350px;
  padding: 3rem 2.2rem 2rem 2.2rem;
  box-shadow: 0 8px 32px rgba(166, 138, 125, 0.18), 0 1px 3px #eaeaea;
  font-family: "Didot", serif;
  color: #4b382a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const modalTitle = css`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const inputFieldLogin = css`
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1.07rem;
  border: 1.5px solid #cfc2b0;
  border-radius: 15px;
  outline: none;
  font-family: "Didot", serif;
  color: #4b382a;
  background: #f7f2ed;
  margin-bottom: 1.15rem;
  box-sizing: border-box;
  transition: border 0.26s;

  &:focus {
    border: 1.5px solid #ad9372;
    background: #fff;
  }
`;

export const modalLoginButton = css`
  background: linear-gradient(90deg, #d6bb97 30%, #b79e7a 100%);
  color: #fff;
  font-family: "Didot", serif;
  font-weight: 700;
  font-size: 1.15rem;
  border: none;
  border-radius: 17px;
  padding: 0.72rem 0;
  cursor: pointer;
  box-shadow: 0 1px 8px rgba(166, 138, 125, 0.14);
  margin-bottom: 1.05rem;
  width: 100%;
  transition: background 0.19s;

  &:hover {
    background: linear-gradient(90deg, #a68a7d 30%, #d1b89c 100%);
  }
`;

export const googleButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  background-color: #fff;
  border: 1.5px solid #ad9372;
  border-radius: 17px;
  padding: 0.72rem 0;
  font-family: "Didot", serif;
  font-weight: 700;
  font-size: 1.10rem;
  color: #4b382a;
  cursor: pointer;
  box-shadow: 0 1px 7px rgba(166, 138, 125, 0.11);
  width: 100%;
  margin-bottom: 1.05rem;
  transition: background 0.19s, box-shadow 0.19s;

  &:hover {
    background: #f9efe2;
    box-shadow: 0 2px 14px rgba(166,138,125,0.18);
  }

  img {
    width: 22px;
    height: 22px;
    margin-right: 2px;
  }
`;

export const googleIcon = css`
  width: 22px;
  height: 22px;
`;

export const signupButton = css`
  background: #fff;
  color: #a68a7d;
  border: 1.5px solid #a68a7d;
  border-radius: 17px;
  font-family: "Didot", serif;
  font-weight: 700;
  font-size: 1.07rem;
  padding: 0.72rem 0;
  cursor: pointer;
  width: 100%;
  margin-top: 0.2rem;
  margin-bottom: 0.1rem;
  transition: background 0.19s, color 0.19s;

  &:hover {
    background: #fcfaf7;
    color: #4b382a;
    border-color: #ad9372;
  }
`;
