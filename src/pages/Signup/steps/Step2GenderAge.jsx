/** @jsxImportSource @emotion/react */
import * as s from "../styles";

const genderOptions = ["남성", "여성", "기타"];
const ageOptions = ["10대", "20대", "30대", "40대", "50대 이상"];

export default function Step2GenderAge({ form, errors, onChange }) {
  return (
    <div css={s.genderAgeContainer}>
      <div>
        <p>성별</p>
        {genderOptions.map((g) => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={form.gender === g}
              onChange={onChange}
            />
            {g}
          </label>
        ))}
        {errors.gender && <p css={s.errorText}>{errors.gender}</p>}
      </div>
      <div>
        <p>연령대</p>
        <select name="age" value={form.age} onChange={onChange}>
          <option value="">선택하세요</option>
          {ageOptions.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        {errors.age && <p css={s.errorText}>{errors.age}</p>}
      </div>
    </div>
  );
}
