/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoSettings } from "react-icons/io5";


function Header() {
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  return (
    <div css={s.header}>  
      <div onClick={() => onClickNavHandler("/")}>웹 서비스 이름</div>
      <div>
        <ul>
          <li
            css={s.headerIcon}
            onClick={() => onClickNavHandler("/myPage")}>
            <IoMdPerson />
          </li>
          <li
            css={s.headerIcon}
            onClick={() => onClickNavHandler("/setting")}>
            <IoSettings />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;