import VideoPlayer from '@/components/VideoPlayer';

export const metadata = {
  title: '[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진.."구글 좋고, 테슬라 별로"',
  description: '유튜브 영상 요약',
};

export default function VideoSummaryPage() {
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진.."구글 좋고, 테슬라 별로"</h1>
        <VideoPlayer videoId="qTmIwG7zCd0" />
        <div className="prose mt-8">
          {/* TODO: Markdown 렌더링 추가 필요 */}
        </div>
      </div>
    </>
  );
}
