import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { Brain, Calendar } from 'lucide-react';

export const FullBlog = ({ blog }: { blog: Blog }) => {
    // Format the date to a readable format
    const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
            <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-10 w-full max-w-screen-xl pt-12">
                    <div className="md:col-span-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center text-green-400 mb-6">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Posted on {formattedDate}</span>
                        </div>
                        <div className="prose prose-invert max-w-none">
                            {blog.content}
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                                <Brain className="w-6 h-6 mr-2" />
                                Author
                            </h2>
                            <div className="flex items-start">
                                <div className="mr-4">
                                    <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="mt-2 text-gray-400">
                                        Inspiring minds and cultivating insights, one post at a time.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullBlog;
