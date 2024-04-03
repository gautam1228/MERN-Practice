import { AppBar } from "../components/AppBar";
import { AvatarComponent } from "../components/BlogCard";
import { useBlog } from "../hooks";
import { BlogContent } from "./BlogContent";
import { useParams } from "react-router-dom";

export default function BlogPage(){

    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: String(id || "")
    });

    if(loading){
        return <div>
            loading...
        </div>
    }

    return(
        <div>
            <AppBar/>
            <div className="grid grid-cols-12 h-screen">
                <div className="col-span-8 ">
                    <BlogContent blog={blog}/>
                </div>
                <div className="col-span-4 bg-red-300">
                    <div className="text-3xl font-bold">
                        Author
                    </div>
                    <AvatarComponent name={blog.author.name} size="big"/>
                </div>
            </div>
        </div>
    )

}