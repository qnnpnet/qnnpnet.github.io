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
  const postsDirectory = path.join(process.cwd(), 'app', 'blog');

  if (!fs.existsSync(postsDirectory)) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            📰 뉴스 요약 블로그
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            게시글이 없습니다.
          </p>
        </div>
      </div>
    );
  }

  const dirNames = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const posts: Array<{ slug: string; data: PostData }> = dirNames
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      const pagePath = path.join(postsDirectory, dirent.name, 'page.tsx');
      if (!fs.existsSync(pagePath)) {
        return null;
      }

      const pageContent = fs.readFileSync(pagePath, 'utf8');

      // Extract metadata from page.tsx
      const titleMatch = pageContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
      const videoIdMatch = pageContent.match(/videoId:\s*['"`]([^'"`]+)['"`]/);
      const publishedAtMatch = pageContent.match(/published_at:\s*['"`]([^'"`]+)['"`]/);
      const tagsMatch = pageContent.match(/tags:\s*['"`]([^'"`]+)['"`]/);

      if (!titleMatch || !videoIdMatch) {
        return null;
      }

      return {
        slug: dirent.name,
        data: {
          title: titleMatch[1],
          video_id: videoIdMatch[1],
          published_at: publishedAtMatch?.[1] || '',
          date: publishedAtMatch?.[1] || '',
          tags: tagsMatch?.[1] ? tagsMatch[1].split(',').map(tag => tag.trim()) : [],
        } as PostData,
      };
    })
    .filter((post): post is { slug: string; data: PostData } => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.data.date || a.data.published_at || '');
      const dateB = new Date(b.data.date || b.data.published_at || '');
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            📰 뉴스 요약 블로그
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            한경글로벌마켓 YouTube 영상의 핵심 요약
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6">
                {post.data.published_at && (
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-2">
                    <span>📅</span>
                    <span>{post.data.published_at}</span>
                  </div>
                )}
                
                <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.data.title}
                </h2>

                {post.data.tags && post.data.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.data.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    <span>🎬</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              📭 게시글이 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
