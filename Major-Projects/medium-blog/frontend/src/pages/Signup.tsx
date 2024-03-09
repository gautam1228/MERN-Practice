import { Quote } from "../components/Quote";
import { Auth } from "../components/SignupAuth";

export default function Signup(){

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Auth />
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    )

}

