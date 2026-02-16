import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";

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
            slug: dirent.name,
        }));

    return params;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    // Next.js App Router decodes slugs automatically in many contexts,
    // but we use raw directory names as slugs in generateStaticParams.
    // However, if the slug comes in encoded via URL, we need to decode it to match the directory.
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
        <BlogPostClient title={title} videoId={videoId} mdContent={mdContent} />
    );
}
