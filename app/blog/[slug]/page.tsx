import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import VideoPlayer from '@/components/VideoPlayer';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="inline-block text-blue-600 hover:underline mb-6"
      >
        ← 목록으로
      </Link>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">{post.date}</p>

        {post.videoId && post.timestamps && (
          <VideoPlayer videoId={post.videoId} timestamps={post.timestamps} />
        )}

        <div className="markdown-content mt-8">
          {/* 마크다운을 HTML로 변환하는 로직이 필요합니다
              react-markdown 또는 similar library를 사용 */}
          <pre className="whitespace-pre-wrap text-gray-800">
            {post.content}
          </pre>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
