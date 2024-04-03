import { Link } from "react-router-dom";

interface BlogCardProps {
    id : number;
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
} : BlogCardProps) => {

    return (
        <div className="flex justify-center ">
            <Link to ={`/blog/${id}`}>
                <div className=" px-4 mt-8 mb-6 pb-2 max-w-3xl flex justify-center flex-col border-b-2 border-slate-100 cursor-pointer rounded-md">
                    <div className="flex items-center pt-2">
                        <div className="pr-2">
                            <AvatarComponent name={authorName}/>
                        </div>
                        <div className="rounded-full bg-slate-400 w-1 h-1 mx-1"/>

                        <div className="text-md text-gray-700 px-2">
                            {authorName}
                        </div>
                        <div className="rounded-full bg-slate-400 w-1 h-1 mx-1"/>
                        <div className="text-sm text-gray-500 px-2 font-normal">
                            {publishedDate}
                        </div>
                    </div>
                    <div className="text-2xl font-bold py-2">
                        {title.length > 60 ? title.slice(0, 60) + "..." : title}
                    </div>
                    <div className="text-lg text-slate-500 pt-2">
                        {content.length > 100 ? content.slice(0,170) + "..." : content + "."}
                    </div>
                    {/* Time Component  (Expected Reading time) */}
                    <div className="text-sm mt-6 mb-3 font-normal text-slate-700">
                        {Math.ceil(content.length/180) > 1 ? `${Math.ceil(content.length/450)} min read` : '1 min read'}
                    </div>
                </div>
            </Link>
        </div>
    )
    
}

export function AvatarComponent({ name, size = "small" }: {name : string, size? : "small" | "big"}){

    let displayText = "A";

    if(name.split(" ").length >= 2){
        const [ firstName, lastName ] = name.split(" ");
        displayText = [firstName[0].toUpperCase(), lastName[0].toUpperCase()].join("");
    }
    else{
        displayText = name[0];
    }

    return (
        <div className={`flex justify-center items-center bg-gray-400 rounded-full ${size === "small" ?"w-8 h-8":"w-10 h-10"}`}>
            <span className="text-sm text-gray-100">
                {displayText}
            </span>
        </div>
    )
    
}