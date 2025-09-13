/** @jsxImportSource @emotion/react */
// import * as s from "./styles";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>상세 화면</div>
      <button onClick={() => navigate("/")}>Home 화면으로 가기</button>
    </div>
  );
};

export default Detail;