"use client"

import { CreateUser } from "@/actions/usuarioActions";
import Input from "@/components/input";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Usuario() {
    const { push } = useRouter()
    
    async function Submit(formData){
        const resp = await CreateUser(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/usuario")
    }

    return (
        <>
            <NavBar />
            <main className="bg-slate-900 mt-10 mx-auto rounded-xl p-4 w-96 text-center">
                <h1 className="font-bold text-lg text-blue-800 mb-4">Cadastrar Usuario</h1>

                <form action={ Submit } className="flex flex-col gap-2 mt-2 items-center ">
                    <Input name="nome" label="nome" type={ "text" } />
                    <Input name="email" label="email" type={ "text" } />
                    <Input name="senha" label="senha" type={ "password" } />
                    <Input name="endereco" label="endereço" type={ "text" }/>
                    <button type="submit" className="bg-black py-2 px-8 rounded-xl my-1 ">salvar</button>
                </form>
            </main>
        </>
    )
}