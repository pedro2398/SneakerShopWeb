import Button from "@/components/button";
import NavBar from "@/components/navbar";
import UsuarioHome from "./usuarioHome";
import { PlusIcon } from '@heroicons/react/24/solid'

export default async function Usuario() {

    async function buscaUsuarios() {
        const uri = "http://localhost:8080/usuario"
        const usuarios = await fetch(uri, {next: {revalidate: 0}})
    
        if(usuarios.status !== 200) {
          alert("Erro ao carregar dados")
          return
        }
    
        return await usuarios.json()
      }
      
      const usuarios =  await buscaUsuarios()  

    return (
        <>
            <NavBar />
            {usuarios.map(usuario => UsuarioHome(usuario))}
            <div className="mx-auto w-80">
                <Button href="/usuario/new" icon={<PlusIcon className='h-5 w-5'/>}>Cadastrar ususario</Button>     
            </div>
        </>
    )
}