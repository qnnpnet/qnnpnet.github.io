import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export const metadata = {
  title: '한글 테스트',
  description: '테스트',
};

export default async function KoreanTestPage() {
  const filePath = path.join(process.cwd(), 'app', 'blog', 'test-korean-encoding', 'content.md');
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
        <h1 className="text-4xl font-bold mb-4">한글 테스트</h1>
        <div className="prose mt-8 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-invert">
          <ReactMarkdown>
            {mdContent}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
