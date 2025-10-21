import { css } from "@emotion/react";

export const body = css`
  height: 90vh;
  background-color: #DED3CA;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const gridContainer = css`
  display: flex;
  justify-content: flex-start;
  gap: 2vw;
  width: 100vw;
  max-width: 80vw;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`

export const mainProductCard = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100vw;
  max-width: 20vw;
  background-color: #FCF9F5;
  border: 0.1rem solid #dbdbdb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 1vw;
  overflow-x: auto;
  scroll-snap-align: center;

  & :hover {
    transform: translateY(-3px); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); 
     

  }
`

export const productImg = css`
  height: 37vh;
  padding: 20px 20px 0;
  background-color:#F8F4F0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0.1rem solid #dbdbdb;
  border-radius: 8px;
  position: relative; //* 
  
  


  & .img {
    max-width: 100vw;
    max-height: 100vh;
    display: block;
    object-fit: contain;
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
    background-color: #E6DCD1;
    color: #333;
    border-color: #B4A99F;
  }
`