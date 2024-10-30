import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let pass = "";

        if (charAllowed) str += "!@#$%^&*()~+-";
        if (numberAllowed) str += "1234567890";

        for (let i = 0; i < length; i++) {
            let charIdx = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIdx);
        }

        setPassword(pass);
    }, [length, charAllowed, numberAllowed]);

    useEffect(() => {
        generatePassword();
    }, [length, charAllowed, numberAllowed]);

    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    };

    return (
        <>
            <div className="flex justify-center h-screen items-center">
                <div className="w-full max-w-xl mx-auto shadow-xl rounded-lg px-7 py-3 bg-gray-700 text-white  border border-gray-500">
                    <h1 className="text-white text-center my-3 mx-3 text-3xl">
                        Password Generator
                    </h1>
                    <div className="bg-gray-400 h-0.5 mx-7 my-4" />
                    <div className="flex shadow rounded-lg overflow-hidden my-8">
                        <input
                            type="text"
                            value={password}
                            className="outline-none w-full py-1 px-3 text-black"
                            placeholder="Password"
                            readOnly
                            ref={passwordRef}
                        />
                        <button
                            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
                            onClick={copyPasswordToClipboard}
                        >
                            Copy
                        </button>
                    </div>
                    <div className="flex w-full gap-x-7">
                        <div className="flex items-center gap-x-1">
                            <input
                                type="range"
                                min={6}
                                max={12}
                                value={length}
                                className="cursor-pointer"
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <label htmlFor="length" className="ml-2">
                                Length: {length}
                            </label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={numberAllowed}
                                className="cursor-pointer"
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="numbersAllowed">Numbers</label>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <input
                                type="checkbox"
                                defaultChecked={charAllowed}
                                className="cursor-pointer"
                                onChange={() => {
                                    setCharAllowed((prev) => !prev);
                                }}
                            />
                            <label htmlFor="charsAllowed">Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
