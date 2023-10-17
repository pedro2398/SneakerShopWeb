"use client"

import { UpdateUsuario } from "@/actions/usuarioActions"
import Input from "@/components/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export default function Form({usuario}) {
    const { push } = useRouter()
    const [ usuarioEdit, setUsuarioEdit ] = useState(usuario)

    async function Submit() {
        const resp = await UpdateUsuario(usuarioEdit)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/usuario")
    }

    function handleFieldChange(field, value) {
        setUsuarioEdit({
            ...usuarioEdit,
            [field]: value
        })
    }


    return(
        <main className="bg-slate-900 mt-10 mx-auto rounded-xl p-4 w-96 text-center">
        <h1 className="font-bold text-lg text-blue-800 mb-4">Editar Usuario</h1>

        <form action={ Submit } className="flex flex-col gap-2 mt-2 items-center ">
            <Input name="nome" label="novo nome"  type={ "text"} value={usuarioEdit.nome} onChange={(e) => handleFieldChange("nome", e.target.value)}/>
            <Input name="email" label="novo email" type={ "text" } value={usuarioEdit.email} onChange={(e) => handleFieldChange("email", e.target.value)}  />
            <Input name="senha" label="nova senha" type={ "password" } value={usuarioEdit.senha} onChange={(e) => handleFieldChange("senha", e.target.value)} />
            <Input name="endereco" label="novo endereço" type={ "text" } value={usuarioEdit.endereco} onChange={(e) => handleFieldChange("endereco", e.target.value)} />
            <button type="submit" className="bg-black py-2 px-8 rounded-xl my-1 ">salvar</button>
        </form>
    </main>
    )
}