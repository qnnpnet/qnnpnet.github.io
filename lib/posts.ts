import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  id: string;
  title: string;
  video_id: string;
  published_at: string;
  timestamps?: Timestamp[];
  date: string;
}

export interface Timestamp {
  time: number;
  label: string;
  summary: string;
}

export interface PostWithContent extends Post {
  content: string;
}

/**
 * 모든 포스트 데이터를 가져와서 정렬
 */
export function getSortedPostsData(): Post[] {
  // 모든 마크다운 파일 읽기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data as Omit<Post, 'id'>,
    };
  });

  // 날짜 기준 정렬 (최신순)
  return allPostsData.sort((a, b) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * 모든 포스트 ID 가져오기
 */
export function getAllPostIds(): { id: string }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

/**
 * 특정 포스트 데이터 가져오기
 */
export function getPostData(id: string): PostWithContent {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data as Omit<PostWithContent, 'id' | 'content'>,
  };
}
