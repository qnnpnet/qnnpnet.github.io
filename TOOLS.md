# TOOLS.md - Local Notes

리누스(Linus)를 위한 도구 및 환경 설정.

---

## 🛠️ 사용 가능한 도구

- `exec`: 셸 명령 실행 (Docker 샌드박스 내)
- `read`: 파일 읽기
- `write`: 파일 쓰기
- `edit`: 파일 수정
- `process`: 백그라운드 프로세스 관리
- `web_search` (추가 가능): 웹 검색
- `web_fetch` (추가 가능): 웹 콘텐츠 가져오기

---

## 🔒 샌드박스

- **Mode**: Docker
- **Scope**: agent (리누스 전용 컨테이너)

---

## 💻 개발 도구

### Python
```bash
# 테스트 실행
pytest

# 패키지 설치
pip install package-name

# 타입 검사
mypy .

# 린팅
ruff check .
```

### TypeScript/Node.js
```bash
# 테스트 실행
npm test

# 패키지 설치
npm install package-name

# 빌드
npm run build

# 타입 검사
npx tsc --noEmit

# 린팅
npm run lint
```

### Git
```bash
# 브랜치 생성
git checkout -b feature/task-name

# 커밋
git add .
git commit -m "feat: add feature"

# 푸시
git push origin feature/task-name
```

---

## 🧪 테스트

### Stock API (FastAPI)
```bash
cd /home/qnnp/works/stock-api
pytest tests/
```

### Frontend (React)
```bash
cd /home/qnnp/works/qnnp-react-ts
npm test
```

### Telegram Bot
```bash
cd /home/qnnp/works/telegram-stock-bot
pytest
```

---

## 📝 코드 리뷰 체크리스트

### 코드 품질
- [ ] 변수/함수 네이밍 명확함
- [ ] 불필요한 주석 제거
- [ ] 복잡한 로직 설명 있는 주석
- [ ] 마법의 숫자 없음 (상수로 대체)

### 테스트
- [ ] 단위 테스트 추가
- [ ] 통합 테스트 통과
- [ ] 에러 처리 검증
- [ ] 엣지 케이스 고려

### 보안
- [ ] 입력 검증
- [ ] SQL 인젝션 방지
- [ ] XSS 방지
- [ ] 민감 정보 제거

---

## 🚨 에러 처리

### 공통 에러 패턴

**1. 네트워크 타임아웃**
```python
try:
    response = requests.get(url, timeout=10)
except requests.Timeout:
    # 재시도 로직
    logger.warning("Timeout, retrying...")
```

**2. 데이터베이스 연결 실패**
```python
try:
    db.connect()
except OperationalError:
    # 재시도 로직
    logger.error("Database connection failed")
```

**3. API 키 누출 방지**
```python
# .env 파일 사용
import os
API_KEY = os.getenv("API_KEY")

# 또는 환경 변수 설정
export API_KEY="your-key"
```

---

## 📚 참고 자료

### Python
- [PEP 8](https://peps.python.org/pep-0008/)
- [Pytest Docs](https://docs.pytest.org/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Docs](https://jestjs.io/docs/getting-started)

### FastAPI
- [FastAPI Docs](https://fastapi.tiangolo.com/)

### React
- [React Docs](https://react.dev/)
- [Ant Design](https://ant.design/)
