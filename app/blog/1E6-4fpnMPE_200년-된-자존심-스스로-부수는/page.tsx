import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: '200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕',
  description: '유튜브 영상 요약',
};

export default async function VideoSummaryPage() {
  const filePath = path.join(process.cwd(), 'app', 'blog', '1E6-4fpnMPE_200년-된-자존심-스스로-부수는', 'content.md');
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
        <h1 className="text-4xl font-bold mb-4">200년 된 자존심, 스스로 부수는 중..재고폭탄에 세대교체까지, 미국 위스키 산업이 무너지고 있다 | 바이아메리카 in 뉴욕</h1>
        <VideoPlayer videoId="1E6-4fpnMPE" />
        <div className="prose mt-8 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-invert">
          <ReactMarkdown>
            {mdContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
