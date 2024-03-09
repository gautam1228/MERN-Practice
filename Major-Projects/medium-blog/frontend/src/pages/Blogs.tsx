import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if(loading){
        return <div>
            loading...
        </div>
    }

    function toCamelCase(inputString: string): string {
        const words = inputString.toLowerCase().split(' ');
        
        const camelCaseString = words.map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }).join(' ');
        
        return camelCaseString;
    }

    return (
        <div>
            <AppBar/>
            <div>
                {blogs.map(blog => <BlogCard
                        id={String(blog.id)}
                        authorName={toCamelCase(blog.author.name)}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"9th Feb 2024"}
                    />)}
            </div>
        </div>
    )
}