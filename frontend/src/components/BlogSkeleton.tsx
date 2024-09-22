import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <div className="p-6 border-b border-gray-800 w-screen max-w-screen-md cursor-pointer bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gray-700 rounded-full mr-4 shadow-md"></div>
                    <div className="flex-grow">
                        <div className="h-4 bg-gray-700 rounded-full w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-700 rounded-full w-1/2"></div>
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className="pl-2 font-thin text-gray-400 text-sm flex justify-center flex-col">
                        <div className="h-2 bg-gray-700 rounded-full w-20 mb-2"></div>
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2 mb-4">
                    <div className="h-5 bg-gray-700 rounded-full mb-2"></div>
                </div>
                <div className="text-md font-thin mb-4">
                    <div className="h-5 bg-gray-700 rounded-full mb-2"></div>
                    <div className="h-5 bg-gray-700 rounded-full mb-2"></div>
                </div>
                <div className="text-gray-400 text-sm font-thin pt-4">
                    <div className="h-2 bg-gray-700 rounded-full w-24 mb-2"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
