import { useState } from "react";

function App() {
    const [color, setColor] = useState("olive");

    return (
        <>
            <div
                className="w-full h-screen duration-200"
                style={{ background: color }}
            >
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                        <button
                            className="outline-none bg-red-500 rounded-full px-5 py-1 shadow-lg"
                            onClick={() => setColor("red")}
                        >
                            Red
                        </button>
                        <button
                            className="outline-none bg-green-500 rounded-full px-5 py-1 shadow-lg"
                            onClick={() => setColor("green")}
                        >
                            Green
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
