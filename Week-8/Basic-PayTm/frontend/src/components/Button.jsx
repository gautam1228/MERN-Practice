export function Button ({label, onClick}) {
    return <button onClick={onClick} type = "button" className="w-30 text-white bg-gray-800 hover:bg-gray-900 hover:text-gray-100 hover:scale-110 hover:duration-300 transition ease-in-out duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2 me-2 mb-2">
        {label}
    </button>
};