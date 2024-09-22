import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 text-white">
                <Appbar />
                <div className="bg-gray-900 flex justify-center py-8">
                    <div>
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
    <Appbar />
    <div className="bg-gray-900 flex justify-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl px-4">
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 border-b-4 border-green-500" // Added border classes
                >
                    <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={new Date().toLocaleDateString()} // Dynamic current date
                    />
                </div>
            ))}
        </div>
    </div>
</div>

    );
};
