import { Quote } from "../components/Quote";
import { Auth } from "../components/SigninAuth";

export default function Signin(){

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Auth />
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    )

}

