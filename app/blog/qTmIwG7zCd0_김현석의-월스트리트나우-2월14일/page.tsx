import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\"",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\"\"\nvideo_id: \"qTmIwG7zCd0\"\ntags: \"김현석의 월스트리트나우-2월14일, 김현석, 월스트리트나우\"\npublished_at: \"2026-02-13T22:50:29Z\"\n---\n\n# [김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\"\n## 📋 한 줄 요약\n\n> 1월 미국 소비자물가지수(CPI)가 시장 예상을 하회하며 금리 인하 기대감이 강해졌으나, 연휴를 앞둔 차익 실현 심리로 인해 주요 지수는 상승폭을 좁히거나 혼조세로 마감했습니다.\n\n## 🧠 핵심 포인트\n\n- [00:32](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=32) 고용과 물가 지표가 동시에 호조되어 경제 우려 축소 및 금리 인하 기대 상승 → 긍정적 거시 지표\n- [00:47](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=47) AI 공포와 연휴를 앞둔 익스포저 조정으로 장 막판 매도세 우세 → 막판 반락 요인\n- [01:10](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=70) 미국 연휴(프레지던트 데이)와 중국 연휴 기간 중 포지션 축소 움직임 → 휴장 전 심리 안정\n- [01:26](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=86) S&P500과 다우는 소폭 상승, 나스닥은 하락한 채 장 마감 → 기술주 약세 지속\n- [01:39](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=99) 10년물 국채 금리 일주일 간 18~19bp 급락하며 4.5%대 진입 → 금리 인하 기대 반영\n- [02:23](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=143) 1월 헤드라인 CPI 전월 대비 0.2% 상승, 시장 예상치(0.3%) 하회 → 물가 안정 통신\n- [02:46](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=166) 근원 CPI 전년 대비 2.5% 상승, 4년 만에 최저 상승률 기록 → 인플레이션 진정세 확실\n- [03:04](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=184) 에너지와 중고차 가격 하락, 주거비 상승세 둔화가 전체 물가 안정 견인 → 세부 항목 긍정적\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=qTmIwG7zCd0)";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{"[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\""}</h1>
      <VideoPlayer videoId="qTmIwG7zCd0" />
      <div className="prose mt-8 max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
