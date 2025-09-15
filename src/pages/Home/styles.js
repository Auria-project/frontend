import { keyframes, css } from "@emotion/react"; // Emotion 라이브러리에서 keyframes(애니메이션 정의)와 css(스타일 정의) 함수를 임포트합니다.


const HEADER_HEIGHT = "60px"; // 헤더의 높이 값을 60px로 고정해서 저장합니다.


/* 부드러운 Fade-in-up 애니메이션 */
const fadeInUp = keyframes` // fadeInUp라는 이름의 keyframes 애니메이션을 선언합니다.
  0% { opacity: 0; transform: translateY(10px);} // 처음 상태는 투명하며, 아래로 10px 이동해 있습니다.
  100% { opacity: 1; transform: translateY(0);}  // 끝 상태는 불투명하며, 원래 위치에 있습니다.
`; // 애니메이션 선언을 종료합니다.


/* 전체 컨테이너 스타일 */
export const container = css` // 컴포넌트 전체를 감싸는 컨테이너 스타일 선언입니다.
  display: flex; // 내부 요소들을 flexbox로 배치합니다.
  justify-content: center; // 수평축 중앙 정렬을 합니다.
  align-items: flex-start; // 수직축은 시작선(위)에 정렬합니다.
  gap: 2vw; // 자식 요소들 간의 수평 간격을 뷰포트 너비의 2%로 설정합니다.
  width: 100vw; // 화면 너비 전체를 차지합니다.
  height: calc(100vh - ${HEADER_HEIGHT}); // 화면 전체 높이에서 헤더 높이(60px)를 뺀 높이로 설정합니다.
  box-sizing: border-box; // 패딩과 테두리를 포함하여 크기 계산을 하도록 설정합니다.
  padding: 3vh 1vw; // 상하 방향 패딩은 뷰포트 높이 3%, 좌우 방향은 1vw를 줍니다.
  background-color: #ded3ca; // 배경색을 연한 베이지 톤으로 지정합니다.
  font-family: "Didot", serif; // 전체 폰트를 Didot 서체로 지정합니다.
  color: #3d2c2f; // 텍스트 기본 색상을 진한 갈색으로 설정합니다.
`; // container 스타일 선언 끝


/* 왼쪽 향수 그룹 컨테이너 */
export const groupContainer = css` // 왼쪽에 배치될 향수 박스 그룹 컨테이너 스타일입니다.
  display: flex; // flexbox 레이아웃입니다.
  flex-direction: column; // 세로 방향으로 아이템들을 쌓습니다.
  gap: 2rem; // 아이템 간격을 2rem 줍니다.
  align-items: center; // 가로 중앙 정렬합니다.
  border: 1.5px solid #a68a7d; // 밝은 갈색 계열 테두리를 설정합니다.
  background: #f9f7f5; // 약간 밝은 크림색 배경입니다.
  border-radius: 24px; // 테두리 모서리를 24px 둥글게 만듭니다.
  box-sizing: border-box; // 패딩과 테두리를 포함한 크기 계산 방식을 적용합니다.
  width: 65vw; // 가로 너비를 뷰포트 너비의 65%로 고정합니다.
  height: 95%; // 세로 높이를 부모 요소 대비 95%로 설정합니다.
  padding: 2.5rem 1vw; // 상하 2.5rem, 좌우 1vw 만큼 내부 여백을 둡니다.
  overflow: hidden; // 넘치는 콘텐츠는 숨깁니다.
`; // groupContainer 스타일 끝


/* 큰 제목 스타일 */
export const largeTitle = css` // 그룹 위의 큰 제목 스타일입니다.
  font-family: "Didot", serif; // Didot 서체로 설정합니다.
  font-size: 3rem; // 글자 크기는 3rem로 크게 설정합니다.
  font-weight: 700; // 글자를 굵게 표시합니다.
  color: #4b382a; // 어두운 갈색 텍스트 색상입니다.
  letter-spacing: 0.15em; // 글자 간격을 0.15em 만큼 넓힙니다.
  text-transform: uppercase; // 모두 대문자로 변환합니다.
  width: 100%; // 가로 너비를 꽉 채웁니다.
  text-align: center; // 텍스트 중앙 정렬입니다.
  margin-bottom: 2rem; // 제목 아래에 2rem의 공간을 줍니다.
`; // largeTitle 스타일 끝


/* 썸네일 그룹 래퍼 */
export const thumbnailsWrapper = css` // 향수 박스들이 들어올 래퍼 컨테이너 스타일입니다.
  display: flex; // 수평 방향 flex 레이아웃
  gap: 1vw; // 박스 간 좌우 간격을 1vw 줍니다.
  width: 100%; // 가로 너비 100%
  box-sizing: border-box; // 크기 계산 시 패딩과 보더 포함
  justify-content: center; // 내부 아이템 중앙 정렬
  overflow: hidden; // 넘친 내용 숨김
`; // thumbnailsWrapper 스타일 끝


/* 애니메이션 기본 설정 - Opacity 0에서 부드럽게 등장 */
const boxAppear = css` // 각 퍼퓸 박스 등장 시 공통 애니메이션 속성입니다.
  opacity: 0; // 기본적으로 투명하게 시작합니다.
  animation-name: ${fadeInUp}; // 위에서 만든 fadeInUp 애니메이션을 사용합니다.
  animation-duration: 0.5s; // 0.5초 동안 애니메이션이 진행됩니다.
  animation-fill-mode: forwards; // 애니메이션이 끝난 후 최종 상태를 유지합니다.
  animation-timing-function: ease; // 애니메이션 속도가 자연스럽게 변합니다.
`; // boxAppear 끝


export const box1Animate = css`
  ${boxAppear};
  animation-delay: 0.2s;
`;

export const box2Animate = css`
  ${boxAppear};
  animation-delay: 1.93s;
`;

export const box3Animate = css`
  ${boxAppear};
  animation-delay: 3.66s;
`;



/* 각각의 퍼퓸 박스 스타일 */
export const box = css`
  min-width: 0; 
  width: 17vw; 
  max-width: 17vw; 
  height: 60vh; 
  margin: 0;
  border: 1.5px solid #a68a7d; 
  background: #fff9f7; 
  border-radius: 18px; 
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(210, 199, 190, 0.25);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
              border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.07); /* 기존보다 더 크게 확대 */
    border-color: #d4af37; /* 세련된 골드 톤 */
    background-color: #fffaf0; /* 살짝 밝게 변화 */
    box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4), /* 골드톤 깊은 그림자 */
                0 4px 15px rgba(210, 199, 190, 0.4); /* 기존 그림자 조합 */
  }
`;



/* 박스 타이틀 스타일 */
export const boxTitle = css` // 박스 내 향수 이름 텍스트 스타일
  font-family: "Playfair Display", serif; // Playfair Display 서체
  font-size: 2rem; // 사이즈
  font-weight: 600; // 두껍게
  letter-spacing: 0.12em; // 자간
  margin: 3rem 0 1.5rem 0; // 상단 3rem, 하단 1.5rem 여백
  color: #4b382a; // 텍스트 색
  text-align: center; // 중앙 정렬
  text-transform: uppercase; // 대문자 변환
  flex-shrink: 0; // 축소 불가
`; // boxTitle 끝


/* 박스 상세 설명 스타일 */
export const boxDescription = css` // 박스 내 향수 설명 텍스트 스타일
  font-family: "Georgia", serif; // Georgia 서체
  font-size: 1.3rem; // 크기
  color: #6e5c52; // 갈색 계열 텍스트 색상
  text-align: center; // 중앙 정렬
  line-height: 1.6em; // 줄 간격
  margin-top: auto; // 하단에 위치 (남는 공간을 위로 채워)
  padding: 0 2rem 2rem 2rem; // 좌우 2rem, 아래 2rem 패딩
`; // boxDescription 끝


/* 오른쪽 챗봇 대화 영역 스타일 */
export const largeBox = css` // 오른쪽 챗 대화 영역 컨테이너 스타일
  border: 1.5px solid #a68a7d; // 테두리
  background: #fcfaf7; // 크림색 배경
  border-radius: 24px; // 둥근 모서리
  height: 95%; // 부모 대비 높이 95%
  width: 30vw; // 너비 뷰포트 30%
  box-sizing: border-box; // 크기 계산 방식
  padding: 4rem 3rem; // 내측 여백
  overflow-y: auto; // 세로 넘침 시 스크롤 허용
  display: flex; // flex 컨테이너
  flex-direction: column; // 세로 정렬
  box-shadow: inset 0 0 15px #fffefc, 0 0 18px 2px rgba(166, 138, 125, 0.3); 
  // 내부와 외부 스타일 그림자 효과
  position: relative; // 위치 설정 relative
`; // largeBox 끝


/* 환영 박스 스타일 */
export const welcomeBox = css` // 챗봇 환영 메시지 박스 스타일 (현재 사용하지 않음)
  font-family: "Didot", serif;
  font-size: 2.2rem;
  font-weight: 600;
  color: #4b382a;
  padding: 2rem;
  border-radius: 20px;
  background: #fcfaf7;
  box-shadow: 0 0 18px 2px rgba(166, 138, 125, 0.3);
  max-width: 90%;
  margin: auto 0 2rem 0;
`; // welcomeBox 끝


/* 한 글자씩 나타나는 애니메이션 (duration 및 delay 조정) */
export const charAnimate = (index) => css` // 글자마다 delay를 주어 순차 애니메이션 적용하는 스타일 함수
  opacity: 0; // 초기 투명 상태
  display: inline-block; // 인라인 블록으로 처리해서 텍스트 단위 애니메이션 가능하게 함
  animation-name: ${fadeInUp}; // 앞서 정의한 fadeInUp 애니메이션 사용
  animation-duration: 0.5s; // 0.5초 동안 실행
  animation-fill-mode: forwards; // 마지막 상태 유지
  animation-timing-function: ease; // 자연스러운 속도 변화
  animation-delay: ${index * 0.09}s; // 글자번호(index)에 따라 0.09초씩 딜레이 추가
`; // charAnimate 끝


/* 챗봇 메시지 영역 */
export const chatContainer = css` // 채팅 메시지 리스트 영역 스타일
  flex: 1; // 남은 공간 채우기
  overflow-y: auto; // 세로 스크롤 가능
  padding: 1rem 0; // 상하 패딩
  display: flex; // flex 컨테이너
  flex-direction: column; // 세로 나열
  gap: 0.7rem; // 메시지 간 간격
`; // chatContainer 끝


/* 말풍선 기본 스타일 */
export const chatMessage = css` // 공통 채팅 메시지 말풍선 스타일
  max-width: 80%; // 최대 너비 80%
  padding: 0.9rem 1.2rem; // 내부 여백
  border-radius: 20px; // 둥근 모서리
  font-family: "Georgia", serif; // 글꼴
  font-size: 1.15rem; // 글자 크기
  line-height: 1.4; // 줄 간격
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // 가벼운 그림자
  word-break: break-word; // 단어 줄바꿈
`; // chatMessage 끝


/* 사용자 말풍선 */
export const userMsg = css` // 사용자 채팅 말풍선 스타일
  align-self: flex-end; // 오른쪽 정렬
  background-color: #ffeaa7; // 노란 배경
  color: #6a4f4b; // 텍스트 색
  border-bottom-right-radius: 0; // 말풍선 아래 오른쪽 모서리 각지게
`; // userMsg 끝


/* 봇 말풍선 */
export const botMsg = css` // 봇 채팅 말풍선 스타일
  align-self: flex-start; // 왼쪽 정렬
  background-color: #f1e6d0; // 밝은 베이지 배경
  color: #4b382a; // 텍스트 색
  border-bottom-left-radius: 0; // 말풍선 모서리 모양 조정
`; // botMsg 끝


/* 입력창 래퍼 */
export const inputArea = css` // 입력창을 감싸는 영역 스타일
  position: sticky; // 스크롤 시 하단에 고정
  bottom: 0; // 화면 하단 고정 위치
  display: flex; // 내부 플렉스 배치
  gap: 1rem; // 요소 간격
  padding: 1rem 0; // 상하 여백
  background-color: #fcfaf7; // 배경 색상
  border-top: 1.5px solid #a68a7d; // 윗쪽 보더
  box-sizing: border-box; // 크기 계산
  width: 100%; // 가로 100%
  margin-top: auto; // 위로 밀어서 하단 붙임
  z-index: 10; // 높은 z-index로 앞쪽에 표시
`; // inputArea 끝


/* 텍스트 입력 필드 */
export const inputField = css` // 텍스트 입력 필드 스타일
  flex: 1; // 남은 공간 모두 사용
  padding: 0.75rem 1rem; // 여백
  font-size: 1.1rem; // 글자 크기
  border: 1.5px solid #a68a7d; // 테두리 색상
  border-radius: 24px 0 0 24px; // 왼쪽 모서리 둥글게
  outline: none; // 기본 포커스 윤곽선 제거
  font-family: "Didot", serif; // 서체 적용
  color: #3d2c2f; // 텍스트 색깔

  &:focus { // 입력 필드가 포커스 되었을 때 스타일
    border-color: #9f8550; // 테두리 색조 변경
  }
`; // inputField 끝


/* 전송 버튼 */
export const sendButton = css` // 전송 버튼 스타일
  flex: 0 0 80px; // 너비 고정 80px
  background-color: #a68a7d; // 기본 배경색
  border: none; // 테두리 없음
  border-radius: 0 24px 24px 0; // 오른쪽 모서리 둥글게
  color: #fcfaf7; // 흰색 텍스트
  font-family: "Didot", serif; // 서체
  font-weight: 600; // 두껍게
  font-size: 1.1rem; // 글자 크기
  cursor: pointer; // 마우스 포인터 변경
  transition: background-color 0.3s ease; // 배경색 부드럽게 변화

  &:hover { // 버튼 호버 시
    background-color: #9f8550; // 진한 배경색으로 변경
  }
`; // sendButton 끝
