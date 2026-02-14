import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕\"\nvideo_id: \"1E6-4fpnMPE\"\ntags: \"바이아메리카 in 뉴욕\"\npublished_at: \"2026-02-14T00:00:02Z\"\n---\n\n# 200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕\n## 📋 한 줄 요약\n\n> 잭다니엘 등 대기업의 원가 절감 공세 속에서, 뉴욕의 테루아와 입지를 무기로 내세운 신생 증류소들이 미국 위스키 시장의 새로운 변화를 이끌고 있습니다.\n\n## 🧠 핵심 포인트\n\n- [00:18](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=18) 잭다니엘은 오크통 숙성이 핵심 → 캐러멜·바닐라 향의 원인\n- [00:49](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=49) 잭다니엘, 비용 절감을 위해 핵심 공정인 오크통 사용까지 축소 → 대기업의 효율화 추구\n- [01:23](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=83) 맨해튼 노호에 신생 증류소 '그레이 존스' 설립 → 금주법 이후 첫, 프리미엄 스토리텔링\n- [02:12](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=132) 미국 위스키(버번)의 엄격한 제조 규정 → 옥수수 51% 이상 및 숯을 그을린 새 오크통 의무 사용\n- [02:46](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=166) 온도에 따른 통의 팽창과 수축이 숙성의 핵심 → 술이 나무 사이를 오가며 풍미 흡수\n- [03:20](https://www.youtube.com/watch?v=1E6-4fpnMPE&t=200) 뉴욕 업스테이트의 '블랙더트' 흙을 활용한 테루아 경쟁 → 켄터키와 다른 향신료 향의 원료 재배\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=1E6-4fpnMPE)";

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
