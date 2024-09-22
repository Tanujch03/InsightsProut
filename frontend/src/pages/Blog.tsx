import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import {useParams} from "react-router-dom";

// atomFamilies/selectorFamilies
export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className=" bg-gray-700 h-screen flex flex-col justify-center">
                
                <div className=" bg-gray-700 flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}