import VideoPlayer from '@/components/VideoPlayer';

export const metadata = {
  title: '[김현석의 브레이킹 뉴스] 1월 소비자물가지수(CPI) 발표! 2월 13일 오후 10시 30분 L.I.V.E',
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">[김현석의 브레이킹 뉴스] 1월 소비자물가지수(CPI) 발표! 2월 13일 오후 10시 30분 L.I.V.E</h1>
        <VideoPlayer videoId="sIqlVl8j2cA" />
        <div className="prose mt-8">
          {/* TODO: Markdown 렌더링 추가 필요 */}
        </div>
      </div>
    </>
  );
}
