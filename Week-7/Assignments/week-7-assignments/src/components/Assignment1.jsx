export function Assignment1({name, age, city, likes, followers, following, img_src}){


    return (
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg text-center h-max w-90 relative shadow-lg">

                <div className="rounded-lg bg-gradient-to-b from-blue-500 to-blue-300 h-40 w-80 m-1 z-0">
                </div>
                <div className="absolute z-30 top-28 left-32">
                    <img src={img_src} className="h-20 border-solid border-2 border-white rounded-full " alt ="profile image"/>
                </div>

                <div className="mt-16 mb-4 flex justify-center">
                    {`${name}`}
                    <div className="text-gray-500 mx-2">
                        {age}
                    </div>
                </div>
                <div className="text-gray-500">
                    {city}
                </div>
                <hr class="w-40 h-0.5 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-300"></hr>

                <div className="flex justify-around mb-10 text-gray-500">
                    <div className="flex flex-col justify-center">
                        <div>
                            {followers}
                        </div>
                        Followers
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            {following}
                        </div>
                        Following
                    </div>
                    <div className="flex flex-col justify-center">
                        <div>
                            {likes}
                        </div>
                        Likes
                    </div>
                </div>
            </div>

            
        </div>
    )
}