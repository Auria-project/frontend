/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import * as s from "./styles";
// import seasonImg from '../../assets/season_img.png'; 

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

export function PerfumePopup({ open, onClose, content }) {
  if (!open) return null;
  

  return (
    <div css={s.popup_overlay} onClick={onClose}>
      <div css={s.content} onClick={(e) => e.stopPropagation()}>
        <div css={s.btn}>
          <button css={s.closeBtn} onClick={onClose} >닫기 (Close)</button>
          <button css={s.applyBtn}>적용하기</button>
        </div>
        
        <div css={s.top_perfume_card}>
          <img src={content.imageSrc} alt={content.title} css={s.topPerfumeCardImg} />
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div css={s.seasonCardGrid}>
          {content.seasons.map((season, idx) => (
            <div key={idx} css={s.seasonCard}>
              <strong>{season.korean}</strong>
              <div >{season.title}</div>
              <div>{season.subtitle}</div>
              <div>{season.details}</div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default function Home({ userName = "고객" }) {
 
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handlePerfumeClick = (perfumeType) => {
    console.log("Clicked perfume:", perfumeType);
    if (perfumeType === "PERFUME 2") {
      setPopupContent({
        title: "계절에 머무는 향기",
        description: "계절의 특별한 향을 선사합니다",
        
        seasons: [
          {
            korean: "봄",
            title: "봄의 향기 (Spring Fragrance)",
            subtitle: "산뜻한 꽃들의 향기",
            details: "라일락, 피오니, 자스민... 약간의 스트러스 향",
          },
          {
            korean: "여름",
            title: "여름의 향기 (Spring Fragrance)",
            subtitle: "Fresh Blossom",
            details: "시트러스 계열의 향, 바다 내음, 청량하고 상쾌한 향",
          },
          {
            korean: "가을",
            title: "Spring Fragrance",
            subtitle: "Fresh Blossom",
            details: "A delicate blend of cherry blossom and jasmine",
          },
          {
            korean: "겨울",
            title: "Winter Fragrance",
            subtitle: "Fresh Blossom",
            details: "A delicate blend of cherry blossom and jasmine",
          },
        ],
      }); 
      
      setPopupOpen(true); 
    }
  };

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
  };

  return (
    <div css={s.container}>
      <div css={s.groupContainer}>
        <h1 css={s.largeTitle}>나만의 향수 만들기 🌸</h1>
        <div css={s.thumbnailsWrapper}>
          <div css={[s.box, s.box1Animate]}>
            <div css={s.boxTitle}>SPECIAL</div>
            <div css={s.boxDescription}>특별하고 가치있는 향을 만들어보세요</div>
          </div>
          <div
            css={[s.box, s.box2Animate]}
            onClick={() => handlePerfumeClick("PERFUME 2")}
          >
            <div css={s.boxTitle}>SEASON</div>
            <div css={s.boxDescription}>계절의 순간을 기억해보세요</div>
          </div>
          <div css={[s.box, s.box3Animate]}>
            <div css={s.boxTitle}>CUSTOMIZING</div>
            <div css={s.boxDescription}>나만의 향수를 만들어 보세요</div>
          </div>
        </div>
      </div>

      <PerfumePopup
        open={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        content={popupContent}
      />

      <div css={s.largeBox}>
        <div css={s.chatContainer}>
          {chatLog.map((msg, idx) =>
            msg.sender === "bot" && !msg.animatedDone ? (
              <div key={idx} css={[s.chatMessage, s.botMsg]}>
                <AnimatedText text={msg.text} onDone={() => handleAnimatedDone(idx)} />
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
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
