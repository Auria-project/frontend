## 🛠 기술 스택

### Frontend
- **Framework**: React 18+
- **Language**: JavaScript/TypeScript
- **State Management**: Redux
- **HTTP Client**: Axios
- **OAuth**: react-google-login

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java 17+
- **Authentication**: 
  - Spring Security (JWT 기반 인증)
  - OAuth 2.0 Client (Google 로그인)
- **ORM**: Spring Data JPA
- **API Documentation**: Swagger/Springdoc

### Database
- **Primary DB**: MySQL 8.0+
- **Cache**: Redis (추천 결과 캐싱)
- **File Storage**: AWS S3 (프로필 이미지)

### AI/ML
- **Recommendation Engine**: Python FastAPI 마이크로서비스
- **Library**: scikit-learn (협업 필터링 기반 추천)

### DevOps
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Hosting**: AWS EC2 / Vercel
<br>

## 🏗 시스템 구조

**인증 흐름**
- 사용자가 Google OAuth 또는 이메일/비밀번호로 로그인
- Spring Security가 JWT 토큰 발급
- React 클라이언트가 토큰을 저장하고 API 요청 시 헤더에 포함

**추천 시스템**
- 회원가입 시 취향 설문 데이터를 MySQL에 저장
- 로그인 시 Python ML 서비스가 사용자 데이터를 분석하여 맞춤 향수 추천
- 추천 결과를 Redis에 캐싱하여 빠른 응답 제공
- 새로고침 시 다른 추천 결과를 랜덤하게 제공

**데이터 저장**
- 사용자 정보, 취향 데이터, 향수 정보, 저장 목록 모두 MySQL에 저장
- 프로필 이미지는 AWS S3에 업로드 후 URL을 DB에 저장

**설정 및 업데이트**
- 사용자가 취향 재설정 시 MySQL 데이터 업데이트
- 다음 로그인 시 새로운 취향 기반으로 향수 재추천

