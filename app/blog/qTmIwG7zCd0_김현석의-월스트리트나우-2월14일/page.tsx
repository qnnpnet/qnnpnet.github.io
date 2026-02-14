import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\"",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\\\"구글 좋고, 테슬라 별로\\\"\"\nvideo_id: \"qTmIwG7zCd0\"\ntags: \"김현석의 월스트리트나우-2월14일, 김현석, 월스트리트나우\"\npublished_at: \"2026-02-13T22:50:29Z\"\n---\n\n# [김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..\"구글 좋고, 테슬라 별로\"\n## 🧠 핵심 포인트\n\n- [00:32](https://www.youtube.com/watch?v=qTmIwG7zCd0&t=32) 1월 고용 및 물가 지표 안정 확인 → 경제 연착륙 기대감 상승\n- [01:07] 미 증시 장막판 상승분 반납 및 혼조세 | 연휴(프레지던트 데이) 앞둔 리스크 관리\n- [01:39] 미 국채 금리 급락 (10년물 4.5%) | 금리 인하 기대감이 채권 시장에 즉각 반영\n- [02:14] 1월 헤드라인 CPI 예상치(0.3%) 하회한 0.2% 기록 | 인플레이션 둔화세가 예상보다 강함\n- [02:46] 근원 CPI 전년 대비 2.5% 상승 | 4년 만에 가장 낮은 수준으로 물가 안정화 진입\n- [03:04] 에너지 및 중고차 가격 하락이 물가 안정 견인 | 상품 물가의 확실한 하락세 확인\n- [03:18] 주거비(Shelter) 상승폭 0.2%로 둔화 | 물가 비중이 큰 항목의 긍정적 변화\n- [03:38] 서비스 및 의류 물가는 여전히 상승세 | 서비스 인플레이션은 아직 경계 대상\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=qTmIwG7zCd0)";

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
