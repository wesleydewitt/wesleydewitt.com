import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "../lib/posts.js";
import { formatDate } from "../lib/formatDate.js";
import "../styles/pages/essay-page.css";

const EssayPage = () => {
    const { slug } = useParams();
    const essay = getPostBySlug("essay", slug);

    if (!essay) {
        return (
            <main className="main main--essay-page">
                <p>Essay not found.</p>
            </main>
        );
    }

    return (
        <main className="main main--essay-page">
            <article className="essay">
                <h2 className="essay__title">{essay.title}</h2>
                {essay.subtitle && (
                    <h3 className="essay__subtitle">{essay.subtitle}</h3>
                )}
                {/* {essay.date && (
                    <time className="essay__date" dateTime={essay.date}>
                        {formatDate(essay.date)}
                    </time>
                )} */}
                <div className="essay__body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {essay.content}
                    </ReactMarkdown>
                </div>
            </article>
        </main>
    );
};

export default EssayPage;
