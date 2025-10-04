import { useState } from "react";
import { perfumeQuestions } from "../../../data/Signup/perfumeQuestion";

const EXISTING_IDS = ["admin", "user1", "test123"];
const EXISTING_EMAILS = ["admin@example.com", "user1@example.com"];
const EXISTING_NICKNAMES = ["꽃미남", "향수매니아", "향긋한나"];

export default function useSignupForm() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    perfumePreferences: {},
  });

  const [errors, setErrors] = useState({});
  const [selectionError, setSelectionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePerfumeChange = (step, option) => {
    const current = form.perfumePreferences[step] || [];
    let updated;

    if (current.includes(option)) {
      updated = current.filter((i) => i !== option);
      setSelectionError("");
    } else {
      if (current.length < 2) {
        updated = [...current, option];
        setSelectionError("");
      } else {
        setSelectionError("최대 2개까지 선택 가능합니다.");
        return;
      }
    }
    setForm((prev) => ({
      ...prev,
      perfumePreferences: { ...prev.perfumePreferences, [step]: updated },
    }));
  };

  const checkPasswordRules = (pw) => {
    const rules = {
      length: pw.length >= 8,
      alphabet: /[a-zA-Z]/.test(pw),
      number: /\d/.test(pw),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pw),
    };
    const passedCount = Object.values(rules).filter(Boolean).length;
    return { passed: rules.length && passedCount >= 2, rules };
  };

  const validateStep = (step, form) => {
    let valid = true;
    const newErrors = {};

    if (step === 1) {
      if (!form.fullName) {
        newErrors.fullName = "이름을 입력해주세요.";
        valid = false;
      }
      if (!form.username) {
        newErrors.username = "아이디를 입력해주세요.";
        valid = false;
      } else if (EXISTING_IDS.includes(form.username)) {
        newErrors.username = "이미 사용중인 아이디 입니다.";
        valid = false;
      }
      if (!form.nickname) {
        newErrors.nickname = "닉네임을 입력해주세요.";
        valid = false;
      } else if (EXISTING_NICKNAMES.includes(form.nickname)) {
        newErrors.nickname = "이미 사용중인 닉네임 입니다.";
        valid = false;
      }
      if (!form.email) {
        newErrors.email = "이메일을 입력해주세요.";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = "올바른 이메일 형식이 아닙니다.";
        valid = false;
      } else if (EXISTING_EMAILS.includes(form.email)) {
        newErrors.email = "이미 가입된 이메일 입니다.";
        valid = false;
      }
      const pwCheck = checkPasswordRules(form.password);
      if (!form.password) {
        newErrors.password = "비밀번호를 입력해주세요.";
        valid = false;
      } else if (!pwCheck.passed) {
        newErrors.password = "비밀번호 조건 미달";
        valid = false;
      }
      if (!form.confirmPassword) {
        newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
        valid = false;
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
        valid = false;
      }
    }

    if (step === 2) {
      if (!form.gender) {
        newErrors.gender = "성별을 선택해주세요.";
        valid = false;
      }
      if (!form.age) {
        newErrors.age = "연령대를 선택해주세요.";
        valid = false;
      }
    }

    if (step >= 3) {
      const current = form.perfumePreferences[step] || [];
      if (current.length < 1) {
        setSelectionError("최소 1개 이상 선택해주세요.");
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const getSummary = () => {
    let summary = "당신의 향 취향 요약:\n\n";
    Object.entries(form.perfumePreferences).forEach(([qStep, answers]) => {
      const id = parseInt(qStep);
      const question = perfumeQuestions[id - 3];
      if (!question) return;
      summary += `${question.question}\n- ${answers.join(", ")}\n\n`;
    });
    return summary;
  };

  return {
    form,
    errors,
    selectionError,
    handleChange,
    handlePerfumeChange: (optionStep, option) =>
      handlePerfumeChange(optionStep, option),
    validateStep,
    getSummary,
  };
}
