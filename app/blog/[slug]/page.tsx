import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import VideoPlayer from '@/components/VideoPlayer';

interface PostData {
  title: string;
  video_id: string;
  published_at: string;
  timestamps?: Array<{
    time: number;
    label: string;
    summary: string;
  }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');

  // posts 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);

  // 파일이 없으면 404
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const { title, video_id, published_at, timestamps } = matterResult.data as PostData;
  const content = matterResult.content;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{published_at}</p>

        {video_id && timestamps && (
          <div className="my-8">
            <VideoPlayer videoId={video_id} timestamps={timestamps} />
          </div>
        )}

        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
