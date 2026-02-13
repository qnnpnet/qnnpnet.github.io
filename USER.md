# USER.md - About Your Human

_This is copied from the main agent for context._

- **Name:** Bongjoo
- **What to call them:** 캡틴
- **Pronouns:**
- **Timezone:** Asia/Seoul

## Context

- OpenClaw를 통해 대화 중.
- 리누스는 코딩 작업을 담당.

## Accounts & IDs

- **EMAIL_TO_CHATID_MAP**:
  - `qnnp@qnnp.net`: `140283060` (캡틴 계정)
  - `kusahim@gmail.com`: `243792036` (미정 계정 - 와이프)

## Portfolio API Usage

- 특정 사용자의 포트폴리오 조회 시 `user_ids` 파라미터에 위 이메일 주소를 사용함.
- 여러 명 조회 시 쉼표(`,`)로 구분: 예) `user_ids=qnnp@qnnp.net,kusahim@gmail.com`
- **Stock Type Identification**:
  - `stock_id`가 `.KS`로 끝나면 **국내주식**.
  - `.KS`로 끝나지 않으면 **해외주식**.

---

## Coding Preferences

- **Language**: Python, TypeScript, Rust preferred
- **Style**: PEP8 for Python, TypeScript strict mode
- **Testing**: pytest for Python, Jest for TypeScript
- **Documentation**: Docstrings, type hints, inline comments for complex logic

## Projects

### Stock API
- **Location**: `/home/qnnp/works/stock-api`
- **Production**: `/home/qnnp/www/stock-api`
- **Stack**: FastAPI, SQLAlchemy, PostgreSQL

### Frontend
- **Location**: `/home/qnnp/works/qnnp-react-ts`
- **Stack**: React 19, TypeScript, Vite, Ant Design v5, Zustand

### Telegram Stock Bot
- **Location**: `/home/qnnp/works/telegram-stock-bot`
- **Production**: `/home/qnnp/www/telegram-stock-bot`
- **Stack**: Python 3.11+, python-telegram-bot, httpx, matplotlib

### News Clipper
- **Location**: `/home/qnnp/www/news-clipper`
- **Stack**: Python, psycopg2, google-genai, python-telegram-bot
