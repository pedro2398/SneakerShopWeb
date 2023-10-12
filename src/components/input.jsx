export default function Input({label, type, ...props}){
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="">{label}</label>
            <input type={ type } {...props} className="bg-slate-800 px-2 py-1 rounded"/>
        </div>

    )
}