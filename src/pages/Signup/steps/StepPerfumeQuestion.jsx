/** @jsxImportSource @emotion/react */
import * as s from "../styles";
import { perfumeQuestions } from "../../../data/Signup/perfumeQuestion";

export default function StepPerfumeQuestion({ step, form, onChange, selectionError }) {
  const question = perfumeQuestions[step - 3];
  const selectedOptions = form.perfumePreferences[step] || [];

  return (
    <div>
      <p>{question.question}</p>
      <p>{question.description}</p>
      {selectionError && <p css={s.errorText}>{selectionError}</p>}
      <div>
        {question.options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <label key={option} css={isSelected ? s.optionLabelSelected : s.optionLabel}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onChange(step, option)}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
}
