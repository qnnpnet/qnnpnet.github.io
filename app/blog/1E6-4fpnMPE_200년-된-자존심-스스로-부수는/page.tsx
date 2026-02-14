import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕\"\nvideo_id: \"1E6-4fpnMPE\"\ntags: \"바이아메리카 in 뉴욕\"\npublished_at: \"2026-02-14T00:00:02Z\"\n---\n\n# 200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕\n## 📋 한 줄 요약\n\n> 잭다니엘 등 대기업의 비용 절감 기조 속에서 뉴욕 신생 위스키 메이커들이 독창적인 원료와 스토리텔링을 무기로 미국 위스키 시장의 새로운 변화를 이끌고 있습니다.\n\n## 🧠 핵심 포인트\n\n- [00:49](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=49) 잭다니엘, 인력 감축과 핵심 오크통 공정 단축 등 비용 절감 추진 → 대기업의 효율성 추구가 품질 차별화의 기회를 열어줌\n- [01:37](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=97) 금주법 이후 맨해튼 첫 증류소 '그레이 존스 디스틸러리' 오픈 → 도심 내 관광 명소형 제조 시설이 새로운 트렌드로 자리 잡아\n- [01:46](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=106) 위스키 시장, 맛 외에도 지역 상징성과 스토리텔링이 중요해짐 → 브랜드의 유니크한 서사가 소비자 선택의 핵심 변수로 작용\n- [02:12](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=132) 미국 버번, 옥수수 51% 이상 사용 및 새 오크통 숙성이 법적 기준 → 엄격한 규정이 품질과 전통을 지키는 진입장벽 역할\n- [03:30](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=210) 뉴욕 업스테이트의 독특한 흙으로 켄터키와 다른 풍미의 원료 재배 → 테루아(토양과 환경) 차별화가 신생 업체들의 강력한 무기\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=1E6-4fpnMPE)";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{"200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕"}</h1>
      <VideoPlayer videoId="1E6-4fpnMPE" />
      <div className="prose mt-8 max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
