import VideoPlayer from '@/components/VideoPlayer';

export const metadata = {
  title: '미래 세대 부담 늘리는 일본 | 김일규의 도쿄나우',
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">미래 세대 부담 늘리는 일본 | 김일규의 도쿄나우</h1>
        <VideoPlayer videoId="VxSbaFcez1U" />
        <div className="prose mt-8">
          {/* TODO: Markdown 렌더링 추가 필요 */}
        </div>
      </div>
    </>
  );
}
