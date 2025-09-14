/** @jsxImportSource @emotion/react */ // Emotion의 css prop을 사용하기 위한 주석

import React, { useEffect, useState } from "react"; // React와 훅 불러오기
import * as s from "./styles"; // 스타일 모듈 임포트


// 한 글자씩 애니메이션으로 보여주는 컴포넌트
function AnimatedText({ text, onDone }) { // 글자 애니메이션용, text와 완료 콜백 onDone 받음
  useEffect(() => { // 컴포넌트 렌더나 text/onDone 변경 때 실행
    const timer = setTimeout(() => onDone && onDone(), text.length * 90 + 500); 
    // 글자 수 * 0.09초 + 0.5초 대기 후 onDone 콜백 호출 (애니메이션 종료 알림)
    return () => clearTimeout(timer); // 언마운트 시 타이머 해제
  }, [text, onDone]); // 의존성 배열


  return ( // 렌더링
    <div>
      {text.split("").map((char, idx) => ( // 텍스트를 한 글자씩 배열로 나눔
        <span key={idx} css={s.charAnimate(idx)}> {/* 각 글자별 애니메이션 스타일 */}
          {char} {/* 글자 출력 */}
        </span>
      ))}
    </div>
  );
}


export default function Home({ userName = "고객" }) { // Home 컴포넌트 기본 userName "고객"
  const welcomeText = `안녕하세요, ${userName}님! 오늘은 어떤 향수를 만들어볼까요? 😊`; 
  // 환영 메시지 텍스트
  const [chatLog, setChatLog] = useState([ // 채팅 로그 상태, 초기값은 봇 첫 메시지
    { sender: "bot", text: welcomeText, animatedDone: false }, 
  ]);
  const [input, setInput] = useState(""); // 입력창 상태, 빈 문자열 초기화


  // 애니메이션 완료 표시 함수, 인덱스 받아 해당 메시지 animatedDone true로 설정
  const handleAnimatedDone = (idx) => {
    setChatLog((log) =>
      log.map((msg, i) => (i === idx ? { ...msg, animatedDone: true } : msg))
    );
  };


  // 메시지 전송 함수
  const sendMessage = () => {
    const trimmed = input.trim(); // 앞뒤 공백 제거
    if (!trimmed) return; // 입력 비었으면 종료
    setChatLog((log) => [
      ...log,
      { sender: "user", text: trimmed, animatedDone: true }, // 사용자 메시지 바로 추가
    ]);
    setInput(""); // 입력창 초기화


    // 봇 메시지 지연 후 추가 (애니메이션 다시 시작)
    setTimeout(() => {
      setChatLog((log) => [
        ...log,
        {
          sender: "bot", 
          text: `"${trimmed}" 향수, 정말 좋은 선택입니다!`, // 사용자 입력 반영 봇 메시지
          animatedDone: false, // 애니메이션 아직 완료 안 됨
        },
      ]);
    }, 800); // 0.8초 지연 후 추가
  };


  return ( // JSX 렌더링 시작
    <div css={s.container}> {/* 전체 컨테이너 스타일 적용 */}
      <div css={s.groupContainer}> {/* 왼쪽 향수 그룹 컨테이너 */}
        <h1 css={s.largeTitle}>나만의 향수 만들기 🌸</h1> {/* 큰 제목 */}
        <div css={s.thumbnailsWrapper}> {/* 퍼퓸 박스 래퍼 */}
          <div css={[s.box, s.box1Animate]}> {/* 첫 번째 박스 */}
            <div css={s.boxTitle}>PERFUME 1</div> {/* 박스 타이틀 */}
            <div css={s.boxDescription}>꽃향기가 나는 상큼한 향</div> {/* 설명 */}
          </div>
          <div css={[s.box, s.box2Animate]}> {/* 두 번째 박스 */}
            <div css={s.boxTitle}>PERFUME 2</div>
            <div css={s.boxDescription}>우디하고 따뜻한 향</div>
          </div>
          <div css={[s.box, s.box3Animate]}> {/* 세 번째 박스 */}
            <div css={s.boxTitle}>PERFUME 3</div>
            <div css={s.boxDescription}>상쾌한 시트러스 향</div>
          </div>
        </div>
      </div>


      <div css={s.largeBox}> {/* 챗봇 대화 영역 컨테이너 */}
        <div css={s.chatContainer}> {/* 메시지 리스트 영역 */}
          {chatLog.map((msg, idx) =>  // chatLog 순회하면서 메시지 출력
            msg.sender === "bot" && !msg.animatedDone ? ( 
              // 봇 메시지며 애니메이션이 안 끝난 경우
              <div key={idx} css={[s.chatMessage, s.botMsg]}> {/* 봇 말풍선 스타일 */}
                <AnimatedText text={msg.text} onDone={() => handleAnimatedDone(idx)} /> 
                {/* AnimatedText 컴포넌트로 글자별 애니메이션 표시, 끝나면 onDone 호출 */}
              </div>
            ) : (
              <div key={idx} css={[s.chatMessage, msg.sender === "user" ? s.userMsg : s.botMsg]}>
                {/* 사용자 혹은 봇 메시지에 따라 다른 스타일 적용 */}
                {msg.text} {/* 텍스트 바로 출력 */}
              </div>
            )
          )}
        </div>


        <div css={s.inputArea}> {/* 입력창 래퍼 */}
          <input
            css={s.inputField} // 입력 필드 스타일
            type="text" // 텍스트 입력 타입
            placeholder="원하시는 향수를 말씀해 주세요..." // 안내 문구
            value={input} // 입력값 바인딩
            onChange={(e) => setInput(e.target.value)} // 입력시 상태 갱신
            onKeyDown={(e) => { // 키 이벤트 핸들러
              if (e.key === "Enter") { // 엔터 입력 시
                e.preventDefault(); // 기본 엔터 동작 방지
                sendMessage(); // 메시지 전송 함수 호출
              }
            }}
          />
          <button css={s.sendButton} onClick={sendMessage}> {/* 전송 버튼 */}
            전송
          </button>
        </div>


      </div>
    </div>
  );
}
