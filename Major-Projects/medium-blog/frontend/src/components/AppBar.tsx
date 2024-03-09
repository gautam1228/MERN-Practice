import { Link } from "react-router-dom"
import { AvatarComponent } from "./BlogCard"

export const AppBar = () => {

    return(
        <div className="border-b border-slate-200 flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">
                <Link to ={"/blogs"}>
                    Medium
                </Link>
            </div>
            <div className="flex gap-10 items-center">
                <button className="bg-green-500 rounded-2xl w-20 h-8 text-white">
                    New
                </button>
                <AvatarComponent name="Gautam Singh" size={"big"}/>
            </div>
        </div>
    )

}