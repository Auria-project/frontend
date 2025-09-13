/** @jsxImportSource @emotion/react */
// import * as s from "./styles";

import { useNavigate } from "react-router-dom";

function Preference() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>취향 선택 화면</div>
      <button onClick={() => navigate("/")}>Home 화면으로 가기</button>
    </div>
  );
};

export default Preference;