"use server"
import { revalidatePath } from "next/cache"
const url = "http://localhost:8080/usuario"

export async function CreateUser(data){

    const options = {
        method: "POST", 
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) return { error : "erro ao cadastrar"}

    revalidatePath("/usuario")

}

export async function deleteUsuario(id) {
    const options = {
        method: "DELETE"
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204) {
        return {erro: "Error ao apagar"}
    }

    revalidatePath("/usuario")

}