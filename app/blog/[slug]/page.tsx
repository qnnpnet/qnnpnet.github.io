import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface PostData {
  title: string;
  video_id: string;
  published_at: string;
  one_line_summary?: string;
  timestamps?: Array<{
    time: number;
    label: string;
    summary: string;
  }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const { title, video_id, published_at, one_line_summary, timestamps } = matterResult.data as PostData;
  const content = matterResult.content;
  const videoUrl = `https://www.youtube.com/watch?v=${video_id}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              📰 {title}
            </h1>
            <p className="text-blue-100 text-lg">
              📅 {published_at}
            </p>
          </div>

          <div className="p-8">
            {/* One-line Summary */}
            {one_line_summary && (
              <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h2 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">
                  📋 한 줄 요약
                </h2>
                <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                  {one_line_summary}
                </p>
              </div>
            )}

            {/* YouTube Embed */}
            {video_id && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🎬</span>
                  <span>원본 영상</span>
                </h2>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video_id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
                >
                  🔗 YouTube에서 보기
                </a>
              </div>
            )}

            {/* Timestamp Summaries */}
            {timestamps && timestamps.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>🧠</span>
                  <span>간단 해석</span>
                </h2>
                <div className="space-y-4">
                  {timestamps.map((ts, index) => {
                    const timestampUrl = `${videoUrl}&t=${ts.time}`;
                    return (
                      <div
                        key={index}
                        className="p-5 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        <a
                          href={timestampUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 group"
                        >
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white font-bold rounded text-sm group-hover:bg-blue-700 transition-colors">
                            {ts.label}
                          </span>
                          <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed flex-1">
                            {ts.summary}
                          </p>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Markdown Content */}
            {content && (
              <div className="prose prose-slate max-w-none prose-lg dark:prose-invert">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
