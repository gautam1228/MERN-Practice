import axios from "axios";

export default async function(){

    const todos = await getTodo();

    return (
        <div className="flex flex-col h-screen justify-center">
            <div className="flex w-full justify-center">
                <div className="flex flex-col justify-center">
                    {todos.map((todo: ITodo) => <ToDo compeleted={todo.compeleted} title={todo.title} />)}
                </div>
            </div>
        </div>
    )
}

async function getTodo(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    return response.data; 
}

interface ITodo {
    title: string;
    compeleted: boolean;
}

const ToDo = ({title, compeleted}: ITodo) => {
    return (
        <div className="flex w-200 justify-center">
            <div className="flex justify-center border-amber-100 p-2 rounded-2xl bg-slate-700 m-2 w-200 text-center">
                <div className="flex flex-col justify-center align-middle">
                    <h1>{title}</h1>
                    <p>{compeleted ? "Completed ✅" : "Not Completed ❌"}</p>
                </div>
            </div>
        </div>
    )
}