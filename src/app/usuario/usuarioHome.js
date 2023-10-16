import DropDown from "@/components/dropdown"

export default function UsuarioHome(usuario) {
    return(
        <div className='w-80 mx-auto bg-black flex justify-between py-1 pr-1 rounded-lg mt-2'>
            <p className='my-auto mx-2'>{ usuario.email }</p>
            <DropDown id={usuario.id}/>
        </div>
    )
}