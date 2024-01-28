import { Link } from 'react-router-dom';


export function BottomWarning({label, buttonText, to}){

    return (
        <div>
            <div className='py-4 text-sm flex justify-center'>
                {label}
            <Link className='pointer underline pl-1 cursor-pointer' to = {to}>
                {buttonText}
            </Link>
            </div>
        </div>
    )

}