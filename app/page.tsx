import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostData {
  title: string;
  video_id: string;
  published_at: string;
  date: string;
  tags?: string[];
}

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'posts');

  // posts 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">블로그</h1>
          <p>게시글이 없습니다.</p>
        </div>
      </div>
    );
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Array<{ slug: string; data: PostData }> = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ''),
        data: matterResult.data as PostData,
      };
    })
    .filter(post => post.data.title && post.data.video_id)
    .sort((a, b) => {
      const dateA = new Date(a.data.date || a.data.published_at || '');
      const dateB = new Date(b.data.date || b.data.published_at || '');
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-zinc-50">
            영상 요약 블로그
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            YouTube 영상의 핵심 내용을 요약한 블로그입니다.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-zinc-200 dark:border-zinc-800"
            >
              <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
                {post.data.title}
              </h2>
              {post.data.published_at && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  {post.data.published_at}
                </p>
              )}
              {post.data.tags && post.data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.data.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
                <span>자세히 보기 →</span>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-600 dark:text-zinc-400">
              게시글이 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
