import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: '[김종학의 뉴욕, 지금-2월14일] 6월 금리 인하 확률 85%로 상승 | 기술주 또 차익실현 중 | 종목(코인베이스, 드래프트킹스, 어플라이드 머티리얼즈, 엔비디아, 테슬라)',
  description: '유튜브 영상 요약',
};

export default async function VideoSummaryPage() {
  const filePath = path.join(process.cwd(), 'app', 'blog', 'ItjwgUSWPcg_김종학의-뉴욕-지금-2월14일', 'content.md');
  let mdContent = '';
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    mdContent = matterResult.content;
  } catch (e) {
    console.error('Error reading markdown file:', e);
  }

  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">[김종학의 뉴욕, 지금-2월14일] 6월 금리 인하 확률 85%로 상승 | 기술주 또 차익실현 중 | 종목(코인베이스, 드래프트킹스, 어플라이드 머티리얼즈, 엔비디아, 테슬라)</h1>
        <VideoPlayer videoId="ItjwgUSWPcg" />
        <div className="prose mt-8 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-invert">
          <ReactMarkdown>
            {mdContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
