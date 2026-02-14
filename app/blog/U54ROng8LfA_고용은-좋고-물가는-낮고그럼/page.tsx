import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: "고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑",
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  const content = "---\ntitle: \"고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑\"\nvideo_id: \"U54ROng8LfA\"\ntags: \"월가백브리핑, 금리\"\npublished_at: \"2026-02-14T04:00:33Z\"\n---\n\n# 고용은 좋고, 물가는 낮고...그럼 이제는 금리 인하? | 월가백브리핑\n## 📋 한 줄 요약\n\n> 미국의 1월 고용과 물가 지표가 시장 예상을 만족시키며 인플레이션 둔화와 경제의 견조성이 동시에 확인되었습니다.\n\n## 🧠 핵심 포인트\n\n- [00:00](https://www.youtube.com/watch?v=U54ROng8LfA&t=0) 전반적 지표 호조에도 시장의 조급함 지속 → 인플레이션 잡히고 있지만 금리 인하 명분 완성까지는 기다림이 필요\n- [00:36](https://www.youtube.com/watch?v=U54ROng8LfA&t=36) 1월 미국 고용 13만 개, 실업률 4.3% 하락 → 임금 상승은 소비 여력 확대로 긍정적 평가\n- [01:05](https://www.youtube.com/watch?v=U54ROng8LfA&t=65) 주당 평균 근로 시간 증가 → 기업들이 해고 전에 근로 시간을 줄이는 점 고려 시 고용 시장 아직 여유\n- [01:22](https://www.youtube.com/watch?v=U54ROng8LfA&t=82) 가계 조사 취업자 52만 명 급증 → 기업 조사보다 실제 고용 감정은 훨씬 좋다는 신호\n- [01:39](https://www.youtube.com/watch?v=U54ROng8LfA&t=99) 근원 물가 전년 대비 2.5%…2021년 이후 최저 → 물가 안정세가 뚜렷하나 기저 효과 고려 필요\n- [02:27](https://www.youtube.com/watch?v=U54ROng8LfA&t=147) 1월 물가 급등 우려 불식 → 작년 1월 높은 수치 기저 효과로 인해 이번 1월 급등은 없었음\n- [02:34](https://www.youtube.com/watch?v=U54ROng8LfA&t=154) 고용 지표 후속 하향 조정 가능성 제기 → 한파로 인한 조사 응답 지연분이 반영될 경우 지표는 악화 가능성\n\n## 🔗 원본 영상\n\n[📺 영상 보기](https://www.youtube.com/watch?v=U54ROng8LfA)";

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
