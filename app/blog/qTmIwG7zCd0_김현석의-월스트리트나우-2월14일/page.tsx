import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: '[김현석의 월스트리트나우-2월14일] 고용, 물가 \'골디락스\', Mag 7은 계속 부진..구글 좋고, 테슬라 별로',
  description: '유튜브 영상 요약',
};

export default async function VideoSummaryPage() {
  const filePath = path.join(process.cwd(), 'app', 'blog', 'qTmIwG7zCd0_김현석의-월스트리트나우-2월14일', 'content.md');
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
        <h1 className="text-4xl font-bold mb-4">[김현석의 월스트리트나우-2월14일] 고용, 물가 '골디락스', Mag 7은 계속 부진..구글 좋고, 테슬라 별로</h1>
        <VideoPlayer videoId="qTmIwG7zCd0" />
        <div className="prose mt-8 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-invert">
          <ReactMarkdown>
            {mdContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
