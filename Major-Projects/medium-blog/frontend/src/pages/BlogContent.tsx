import { Blog } from "../hooks";

export const BlogContent = ({ blog }: { blog : Blog }) => {

    return (
        <div>
            <div className="text-5xl font-extrabold flex flex-row justify-center py-10 bg-yellow-100">
                <div className="max-w-4xl">
                    {blog.title}
                </div>
            </div>
            <div className=" bg-blue-100 flex justify-center">
                <div className="px-20 text-xl font-light max-w-4xl bg-slate-500">
                    {blog.content}
                </div>
            </div>
        </div>
    )

}