/** @jsxImportSource @emotion/react */
import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import * as s from "./styles";

export default function Signin({ isOpen, onClose, goToSignup }) {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    alert("구글 로그인 실행 (구현 필요)");
    onClose();
  };

  const handleLogin = () => {
    console.log(username, password);
		if (username.trim().length === 0 || password.trim().length === 0) {
			alert("아이디 또는 비밀번호를 입력해주세요.");
			return;
		} else {
			// 로그인 API요청 보내기
			signinRequest({
				username: username,
				password: password,
			}).then((response) => {
				if (response.data.status === "success") {
					alert(response.data.message);
					localStorage.setItem("accessToken", response.data.data);
					window.location.href = "/";
				} else if (response.data.status === "failed") {
					alert(response.data.message);
					return;
				}
			});
		}
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div css={s.modalOverlay} onClick={onOverlayClick}>
      <div css={s.modalContainer}>
        <h2 css={s.modalTitle}>로그인</h2>
        <AuthInput
          type={"text"}
          placeholder={"아이디"}
          state={username}
          setState={setUsername}
          css={s.inputFieldLogin}
        />
        <AuthInput
          type={"password"}
          placeholder={"비밀번호"}
          state={password}
          setState={setPassword}
          css={s.inputFieldLogin}
        />
        <button css={s.modalLoginButton} onClick={handleLogin}>
          로그인
        </button>
        <button css={s.googleButton} onClick={handleGoogleLogin}>
          <a href="http://localhost:8080/oauth2/authorization/google">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              css={s.googleIcon}
            />
            구글 로그인
          </a>
        </button>
        <button css={s.signupButton} onClick={() => {
            onClose();
            goToSignup();
          }}>
          회원가입
        </button>
      </div>
    </div>
  );
}
