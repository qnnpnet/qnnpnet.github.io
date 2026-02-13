import VideoPlayer from '@/components/VideoPlayer';

export const metadata = {
  title: '[빈난새의 개장전요것만-2월13일] 올해 3번 인하 등장 | 트럼프 철강관세 축소 검토 | 갑자기 저승사자 된 AI | AMAT ANET 코인베이스 리비안 더치브로 릴리 비트마인',
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">[빈난새의 개장전요것만-2월13일] 올해 3번 인하 등장 | 트럼프 철강관세 축소 검토 | 갑자기 저승사자 된 AI | AMAT ANET 코인베이스 리비안 더치브로 릴리 비트마인</h1>
        <VideoPlayer videoId="3HK9e0S6WFc" />
        <div className="prose mt-8">
          {/* TODO: Markdown 렌더링 추가 필요 */}
        </div>
      </div>
    </>
  );
}
