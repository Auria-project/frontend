/** @jsxImportSource @emotion/react */
import * as s from "../styles";

export default function StepSummary({ summary }) {
  return (
    <div>
      <h3>향수 취향 요약</h3>
      <pre css={s.summaryText}>{summary}</pre>
    </div>
  );
}
