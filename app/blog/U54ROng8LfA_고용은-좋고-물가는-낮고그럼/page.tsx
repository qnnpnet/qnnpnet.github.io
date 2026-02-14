import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑\"\nvideo_id: \"U54ROng8LfA\"\ntags: \"월가백브리핑, 금리\"\npublished_at: \"2026-02-14T04:00:33Z\"\n---\n\n# 고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑\n## 📋 한 줄 요약\n\n> 미국 고용과 물가 지표가 동반 호조를 보이며 인플레이션 둔화와 경제의 견조함이 동시에 입증되었습니다.\n\n## 🧠 핵심 포인트\n\n- [00:00](https://www.youtube.com/watch?v=U54ROng8LfA&t=0) 전반적 지표 긍정…인플레이션 잡혔지만 통화완화 명분 완성에 조급함 → 시장 안정 기대감 큼\n- [00:36](https://www.youtube.com/watch?v=U54ROng8LfA&t=36) 1월 고용 13만 개, 실업률 4.3%…시간당 임금 상승 → 소비 여력 확보로 긍정적 해석\n- [00:57](https://www.youtube.com/watch?v=U54ROng8LfA&t=57) 근로 시간 증가…해고보단 시간 단축 우선이라 해고 위험 거리 멀어 → 고용 시장 견조성 확인\n- [01:31](https://www.youtube.com/watch?v=U54ROng8LfA&t=91) 근원 물가 전년 대비 2.5%…2021년 이후 최저치 기록 → 인플레이션 둔화세 뚜렷\n- [02:07](https://www.youtube.com/watch?v=U54ROng8LfA&t=127) 기저 효과 기여…물가 하락세지만 작년 1월 높은 수치 대비 영향 → 추세 자체는 여전히 하락\n- [02:34](https://www.youtube.com/watch?v=U54ROng8LfA&t=154) 한파 등 악영향으로 고용 지표 하향 수정 가능성 제기 → 추후 데이터 주의 필요\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=U54ROng8LfA)";

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{"고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑"}</h1>
      <VideoPlayer videoId="U54ROng8LfA" />
      <div className="prose mt-8 max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
