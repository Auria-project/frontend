/** @jsxImportSource @emotion/react */
import * as s from "../styles";

export default function Step1UserInfo({ form, errors, onChange }) {
  return (
    <>
      <input
        name="fullName"
        value={form.fullName}
        onChange={onChange}
        placeholder="이름"
        css={s.inputUser}
      />
      {errors.fullName && <p css={s.errorText}>{errors.fullName}</p>}

      <input
        name="username"
        value={form.username}
        onChange={onChange}
        placeholder="아이디"
        css={s.inputUser}
      />
      {errors.username && <p css={s.errorText}>{errors.username}</p>}

      <input
        name="nickname"
        value={form.nickname}
        onChange={onChange}
        placeholder="닉네임"
        css={s.inputUser}
      />
      {errors.nickname && <p css={s.errorText}>{errors.nickname}</p>}

      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="이메일"
        css={s.inputUser}
      />
      {errors.email && <p css={s.errorText}>{errors.email}</p>}

      <input
        type="password"
        name="password"
        value={form.password}
        onChange={onChange}
        placeholder="비밀번호"
        css={s.inputUser}
      />
      {errors.password && <p css={s.errorText}>{errors.password}</p>}

      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={onChange}
        placeholder="비밀번호 확인"
        css={s.inputUser}
      />
      {errors.confirmPassword && <p css={s.errorText}>{errors.confirmPassword}</p>}
    </>
  );
}
