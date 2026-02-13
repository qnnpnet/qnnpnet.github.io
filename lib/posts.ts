import fs from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  videoId?: string;
  timestamps?: Array<{
    time: number;
    label: string;
    summary: string;
  }>;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');

      // 간단한 파싱: 실제로는 frontmatter 파서를 사용하거나
      // gray-matter 등의 라이브러리를 사용하는 것이 좋습니다
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // 간단한 추출 (나중에 gray-matter로 교체)
      const titleMatch = fileContents.match(/^# (.+)$/m);
      const title = titleMatch ? titleMatch[1] : slug;
      const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
      const date = dateMatch ? dateMatch[1] : '';

      // 첫 문단을 excerpt로 사용
      const excerptMatch = fileContents.match(/^#\s+.+\n+(.+)$/m);
      const excerpt = excerptMatch ? excerptMatch[1].substring(0, 200) + '...' : '';

      return {
        slug,
        title,
        date,
        excerpt,
        content: fileContents,
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export function getLatestPosts(count: number = 10): Post[] {
  return getAllPosts().slice(0, count);
}
