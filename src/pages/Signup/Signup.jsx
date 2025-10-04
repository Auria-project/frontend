/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import Step1UserInfo from "./steps/Step1UserInfo";
import Step2GenderAge from "./steps/Step2GenderAge";
import StepPerfumeQuestion from "./steps/StepPerfumeQuestion";
import StepSummary from "./steps/StepSummary";
import { perfumeQuestions } from "../../data/Signup/perfumeQuestion";
import useSignupForm from "./hooks/useSignupForm";
import { signupRequest } from "../../apis/auth/authApis";


export default function Signup({ isOpen, onClose }) {
  const navigate = useNavigate();

  const {
    form,
    errors,
    selectionError,
    handleChange,
    handlePerfumeChange,
    validateStep,
    getSummary,
  } = useSignupForm();

  const [step, setStep] = useState(1);
  const [showSummary, setShowSummary] = useState(false);

  const totalSteps = perfumeQuestions.length + 2;
  const isLastStep = step === totalSteps;

  const handleNext = () => {
    if (!validateStep(step, form)) return;
    if (isLastStep) setShowSummary(true);
    else setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (showSummary) setShowSummary(false);
    else setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirm = () => {
    signupRequest({
      username: form.username,
      password: form.password,
      email: form.email,
      nickname: form.nickname,
      fullname: form.fullname,
      gender: form.gender,
      age: form.age,
      preferences: form.perfumePreferences,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert(response.data.message);
          navigate("/auth/signin");
        } else {
          alert(response.data.message || "회원가입 실패");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("문제가 발생했습니다. 다시 시도해주세요.");
      });
  };

  if (!isOpen) return null;

  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContainer}>
        <div css={s.stepCounter}>
          {showSummary ? "요약" : `질문 ${step} / ${totalSteps}`}
        </div>
        <button type="button" onClick={onClose} css={s.closeButton}>
          ×
        </button>

        {!showSummary ? (
          <>
            {step === 1 && (
              <Step1UserInfo
                form={form}
                errors={errors}
                onChange={handleChange}
              />
            )}
            {step === 2 && (
              <Step2GenderAge
                form={form}
                errors={errors}
                onChange={handleChange}
              />
            )}
            {step >= 3 && step <= totalSteps && (
              <StepPerfumeQuestion
                step={step}
                form={form}
                onChange={handlePerfumeChange}
                selectionError={selectionError}
              />
            )}
          </>
        ) : (
          <StepSummary summary={getSummary()} />
        )}

        <div css={s.buttonGroup}>
          {(step > 1 || showSummary) && (
            <button onClick={handlePrev} css={s.prevButton}>
              ← 이전
            </button>
          )}
          {showSummary ? (
            <button onClick={handleConfirm} css={s.submitButton}>
              가입 완료
            </button>
          ) : (
            <button onClick={handleNext} css={s.nextButton}>
              다음 →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
