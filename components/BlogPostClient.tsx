"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import VideoPlayer from "@/components/VideoPlayer";

interface BlogPostClientProps {
    title: string;
    videoId: string;
    mdContent: string;
}

export default function BlogPostClient({
    title,
    videoId,
    mdContent,
}: BlogPostClientProps) {
    const [timestamp, setTimestamp] = useState<number | undefined>(undefined);

    // YouTube URL에서 타임스탬프 추출 함수
    const extractTimestamp = (href: string | undefined): number | undefined => {
        if (!href) return undefined;

        // YouTube URL 패턴 매칭 (watch?v=...&t=10 또는 t=10)
        const youtubePattern =
            /(?:youtube\.com\/watch\?.*?t=|youtu\.be\/.*?\?t=|^t=)(\d+)/;
        const match = href.match(youtubePattern);

        if (match && match[1]) {
            return parseInt(match[1], 10);
        }

        return undefined;
    };

    // 링크 클릭 핸들러
    const handleLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string | undefined,
    ) => {
        const timestamp = extractTimestamp(href);
        setTimestamp(timestamp);
    };

    return (
        <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto max-w-4xl px-4 py-12">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                        {title}
                    </h1>
                    <div className="border-b-2 border-gray-200 dark:border-gray-700"></div>
                </header>

                {videoId && (
                    <VideoPlayer
                        videoId={videoId}
                        currentTime={timestamp || 0}
                    />
                )}

                <div className="markdown-body bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // h1 태그를 렌더링하지 않음
                            h1: ({ node, children, ...props }) => {
                                // 만약 특정 텍스트가 포함된 경우만 숨기고 싶다면:
                                // if (children.toString().includes("200년 된 자존심")) return null;

                                // 모든 H1을 숨기려면 그냥 null 리턴
                                return null;
                            },
                            a: ({ href, children }) => {
                                const timestamp = extractTimestamp(href);
                                const isYouTubeTimestamp =
                                    timestamp !== undefined;

                                return (
                                    <a
                                        href={href}
                                        className={`${
                                            isYouTubeTimestamp
                                                ? "text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer"
                                                : ""
                                        }`}
                                        onClick={(e) => {
                                            // 1. 브라우저의 기본 페이지 이동 동작을 막습니다.
                                            e.preventDefault();
                                            // 2. 정의하신 클릭 핸들러만 실행합니다.
                                            handleLinkClick(e, href);
                                        }}
                                        target={
                                            isYouTubeTimestamp
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel={
                                            isYouTubeTimestamp
                                                ? undefined
                                                : "noopener noreferrer"
                                        }
                                    >
                                        {children}
                                    </a>
                                );
                            },
                        }}
                    >
                        {mdContent}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
