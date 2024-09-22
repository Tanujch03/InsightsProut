import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

export const Appbar = () => {
    
    return (
        <div className="border-b border-gray-700 bg-gray-900 flex justify-between px-10 py-4">
            <Link to="/blogs" className="flex items-center cursor-pointer text-white text-xl font-bold">
                <Brain className="h-8 w-8 text-green-400 mr-2" /> {/* Ensured icon is properly positioned */}
                InsightSprout
            </Link>
            <div className="flex items-center">
                <Link to="/publish">
                    <button
                        type="button"
                        className="mr-4 text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        New
                    </button>
                </Link>
                <Avatar size="big" name="tanuj" />
            </div>
        </div>
    );
};
