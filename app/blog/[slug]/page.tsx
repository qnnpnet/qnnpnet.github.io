import fs from "fs";
import path from "path";
import matter from "gray-matter";
import VideoPlayer from "@/components/VideoPlayer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "app", "blog");

    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const dirNames = fs.readdirSync(postsDirectory, { withFileTypes: true });

    const params = dirNames
        .filter(
            (dirent) => dirent.isDirectory() && !dirent.name.startsWith("["),
        )
        .map((dirent) => ({
            slug: encodeURIComponent(dirent.name),
        }));

    console.log(
        "generateStaticParams returning:",
        JSON.stringify(params, null, 2),
    );

    return params;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(
        process.cwd(),
        "app",
        "blog",
        decodedSlug,
        "content.md",
    );

    if (!fs.existsSync(filePath)) {
        return {
            title: "Blog Post Not Found",
        };
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
        title: matterResult.data.title,
        description: "유튜브 영상 요약",
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const filePath = path.join(
        process.cwd(),
        "app",
        "blog",
        decodedSlug,
        "content.md",
    );

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    let mdContent = "";
    let title = "";
    let videoId = "";

    try {
        const fileContents = fs.readFileSync(filePath, "utf8");
        const matterResult = matter(fileContents);
        mdContent = matterResult.content;
        title = matterResult.data.title;
        videoId = matterResult.data.video_id;
    } catch (e) {
        console.error("Error reading markdown file:", e);
        notFound();
    }

    return (
        <>
            <div className="container mx-auto max-w-4xl px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                {videoId && <VideoPlayer videoId={videoId} />}
                <div className="prose mt-8 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-invert">
                    <ReactMarkdown>{mdContent}</ReactMarkdown>
                </div>
            </div>
        </>
    );
}
