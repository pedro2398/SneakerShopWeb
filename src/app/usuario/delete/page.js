"use client"

import NavBar from "@/components/navbar";
import Input from "@/components/input";
import { deleteUsuario } from "@/actions/usuarioActions";

export default function Usuario() {

    async function Submit(formData){

        

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/usuario")

    }

    return(
        <>
            <NavBar/>
            <main className="w-96 mx-auto mt-4 flex-col justify-center">
                <form action={ Submit }>
                    <Input label={ "Para confirmar a exclusão da sua conta, informe o seu email de cadastro:" }/> 
                    <button type="submit" className="bg-red-500 py-1 px-2  mt-2 rounded-xl">Excluir</button>
                </form>
            </main>
        </>
    )
}