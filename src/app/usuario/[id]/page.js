import { GetUsuario } from "@/actions/usuarioActions";
import NavBar from "@/components/navbar";
import Form from "./form";

export default async function Usuario({ params }) {

    const usuario = await GetUsuario(params.id)
    console.log(usuario)
    return (
        <>
            <NavBar />
            <Form usuario={usuario}/>
        </>
    )
}