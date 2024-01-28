export function InputBox({label, placeholder, onChange}){

    return (
        <div>
            <div className="text-medium font-semibold text-left py-2">
                {label}
            </div>
            <input onChange={onChange} placeholder = {placeholder} className = "w-full px-4 py-1 border rounded-md border-slate-200" />
        </div>
    )

}