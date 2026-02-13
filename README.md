# Qnnp's Blog

한경글로벌마켓 영상 요약과 기술 블로그

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일**: Tailwind CSS 4
- **호스팅**: GitHub Pages

## 개발

```bash
npm run dev
```

## 빌드

```bash
npm run build
```

## 배포

GitHub Pages에 배포하기 위해:

1. GitHub에서 `qnnpnet.github.io` 리포지토리 생성
2. 리모트 추가:

```bash
cd /home/qnnp/works/qnnpnet.github.io
git remote add origin git@github.com:qnnpnet/qnnpnet.github.io.git
```

3. 배포:

```bash
npm run deploy
```

## 프로젝트 구조

```
.
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   ├── blog/
│   │   ├── page.tsx        # 블로그 리스트
│   │   └── [slug]/page.tsx # 개별 포스트
│   └── api/                # API 라우트 (추후 예정)
├── components/
│   └── VideoPlayer.tsx     # YouTube 플레이어 + 타임스탬프
├── lib/
│   └── posts.ts            # 포스트 데이터 관리
└── posts/                  # 마크다운 포스트
    └── *.md
```

## 다음 단계

- [ ] GitHub 리포지토리 생성 및 연동
- [ ] GitHub Pages 배포 설정
- [ ] 한경글로벌마켓 영상 자동 포스팅 연동
- [ ] gray-matter로 마크다운 frontmatter 파싱
- [ ] react-markdown으로 마크다운 렌더링
