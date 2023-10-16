"use client"

import { CreateUser } from "@/actions/usuarioActions"
import Input from "@/components/input"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function Form({usuario}) {

    const { push } = useRouter()
    
    async function Submit(formData) {
        const resp = await CreateUser(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/usuario")
    }


    return(
        <main className="bg-slate-900 mt-10 mx-auto rounded-xl p-4 w-96 text-center">
        <h1 className="font-bold text-lg text-blue-800 mb-4">Editar Usuario</h1>

        <form action={ Submit } className="flex flex-col gap-2 mt-2 items-center ">
            <Input name="nome" label="novo nome"  type={ "text"} value={usuario.nome}/>
            <Input name="email" label="novo email" type={ "text" } value={usuario.email}  />
            <Input name="senha" label="nova senha" type={ "password" } value={"****"} />
            <Input name="endereco" label="novo endereço" type={ "text" } value={usuario.endereco}/>
            <button type="submit" className="bg-black py-2 px-8 rounded-xl my-1 ">salvar</button>
        </form>
    </main>
    )
}