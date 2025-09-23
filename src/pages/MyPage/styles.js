import { css } from "@emotion/react";

export const header = css`
  display: flex;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: transparent;
  
`

export const body = css`
  min-height: 85vh;
  background-color: #DED3CA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
 

`
export const gridContainer = css`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory; /* 가로(x축) 스크롤 스냅을 강제로 적용 */
  scroll-behavior: smooth; /* 부드러운 스크롤 효과 */

`

export const mainProductCard = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  max-width: 300px;
  background-color: #FCF9F5;
  border: 1px solid #dbdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  overflow-x: auto;
  scroll-snap-align: center; /* 카드 중앙에 스크롤이 맞춰지도록 설정 */

  & :hover {
    transform: translateY(-3px); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); 
  }
`

export const productImg = css`
  height: 300px;
  padding: 20px 20px 0;
  background-color: #F8F4F0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dbdbdb;
  border-radius: 8px;
  position: relative; //* 

  & .img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: contain; //*
  }
`

export const detail = css`
  padding: 25px 20px;
  text-align: center;
`

export const productName = css`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #2a2a2a;
  text-transform: capitalize;
`
export const productDscr = css`
  font-size: 0.9rem;
  margin-bottom: 20px;
  font-weight: 300;
`

export const infoBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: 400;

  & .price {
    font-weight: 400;
    color: #333;
    font-size: 0.8rem;
    padding-left: 50px;
  }

  & .volume {
    color: #666;
    font-size: 0.8rem;
    padding-right: 50px;
  }
`

export const actBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const button = css`
  padding: 10px 15px;
  font-size: 0.9rem;
  border: 1px solid #dbdbdb;
  background-color: transparent;
  color: #555;
  cursor: pointer;
  font-weight: 500;
  border-radius: 8px;

  & :hover {
    background-color: #E6DCD1; /* 배경과 잘 어울리는 부드러운 호버 색상 */
    color: #333;
    border-color: #B4A99F;
  }
`