/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function Profile() {
  const name = "강준이";
  const nickname = "junyi04";
  const email = "abcd1234@gamil.com";

  return (
    <div css={s.container}>
      <div css={s.header} />
      <div css={s.body} />
      <div css={s.profile}>
        <div>사진</div>
      </div>
      <div css={s.writeBox}>

      </div>
    </div>
  );
}

export default Profile;