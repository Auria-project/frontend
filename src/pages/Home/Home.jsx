/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import * as s from "./styles";

// 글자별 애니메이션 텍스트 컴포넌트
function AnimatedText({ text, onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone && onDone(), text.length * 90 + 500);
    return () => clearTimeout(timer);
  }, [text, onDone]);

  return (
    <div>
      {text.split("").map((char, idx) => (
        <span key={idx} css={s.charAnimate(idx)}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default function Home({ userName = "고객" }) {
  const welcomeText = `안녕하세요, ${userName}님! 오늘은 어떤 향수를 만들어볼까요? 😊`;
  const [chatLog, setChatLog] = useState([
    { sender: "bot", text: welcomeText, animatedDone: false },
  ]);
  const [input, setInput] = useState("");

  const handleAnimatedDone = (idx) => {
    setChatLog((log) =>
      log.map((msg, i) => (i === idx ? { ...msg, animatedDone: true } : msg))
    );
  };

  // API 호출을 통해 AI 추천 받기
  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setChatLog((log) => [
      ...log,
      { sender: "user", text: trimmed, animatedDone: true },
    ]);
    setInput("");

    // 사용자 메세지 전달 및 응답 받기
    fetch("http://localhost:8080/api/chat/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trimmed),
    })
    .then((response) => response.text())
    .then((data) => {
      setChatLog((log) => [
        ...log,
        {
          sender: "bot",
          text: `"${trimmed}" 향수, 정말 좋은 선택입니다! ${data}`,
          animatedDone: false,
        },
      ]);
    })
    .catch((error) => {
      console.error(error);
    });

    // setTimeout(() => {
    //   setChatLog((log) => [
    //     ...log,
    //     {
    //       sender: "bot",
    //       text: `"${trimmed}" 향수, 정말 좋은 선택입니다!`,
    //       animatedDone: false,
    //     },
    //   ]);
    // }, 800);
  };

  return (
    <div css={s.container}>
      <div css={s.groupContainer}>
        <h1 css={s.largeTitle}>나만의 향수 만들기 🌸</h1>
        <div css={s.thumbnailsWrapper}>
          <div css={[s.box, s.box1Animate]}>
            <div css={s.boxTitle}>PERFUME 1</div>
            <div css={s.boxDescription}>꽃향기가 나는 상큼한 향</div>
          </div>
          <div css={[s.box, s.box2Animate]}>
            <div css={s.boxTitle}>PERFUME 2</div>
            <div css={s.boxDescription}>우디하고 따뜻한 향</div>
          </div>
          <div css={[s.box, s.box3Animate]}>
            <div css={s.boxTitle}>PERFUME 3</div>
            <div css={s.boxDescription}>상쾌한 시트러스 향</div>
          </div>
        </div>
      </div>

      <div css={s.largeBox}>
        <div css={s.chatContainer}>
          {chatLog.map((msg, idx) =>
            msg.sender === "bot" && !msg.animatedDone ? (
              <div key={idx} css={[s.chatMessage, s.botMsg]}>
                <AnimatedText
                  text={msg.text}
                  onDone={() => handleAnimatedDone(idx)}
                />
              </div>
            ) : (
              <div
                key={idx}
                css={[s.chatMessage, msg.sender === "user" ? s.userMsg : s.botMsg]}
              >
                {msg.text}
              </div>
            )
          )}
        </div>

        <div css={s.inputArea}>
          <input
            css={s.inputField}
            type="text"
            placeholder="원하시는 향수를 말씀해 주세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button css={s.sendButton} onClick={sendMessage}>
            전송
          </button>
        </div>
      </div>
    </div>
  );
}