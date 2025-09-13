/** @jsxImportSource @emotion/react */
// import * as s from "./styles";

import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>로그인 화면</div>
      <button onClick={() => navigate("/")}>Home 화면으로 가기</button>
    </div>
  );
};

export default Signin;