import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Qnnp's Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            한경글로벌마켓 영상 요약과 기술 블로그
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              블로그 보기
            </Link>
            <a
              href="https://github.com/qnnpnet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              한경글로벌마켓 요약
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              유튜브 영상을 AI로 자동 요약하고 타임스탬프와 함께 제공합니다.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              기술 노트
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              개발 과정에서 배운 기술과 경험을 공유합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
