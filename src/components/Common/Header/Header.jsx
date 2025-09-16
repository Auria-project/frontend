/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { GiPowerButton } from "react-icons/gi";


function Header() {
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  return (
    <div css={s.header}>  
      <div onClick={() => onClickNavHandler("/")}>Auria</div>
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
          <li
            css={s.headerIcon}
            onClick={() => onClickNavHandler("/test")}>
            <GiPowerButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;