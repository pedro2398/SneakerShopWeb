import Button from "@/components/button";
import NavBar from "@/components/navbar";
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid'


export default function Usuario() {

    return (
        <>
            <NavBar />
            <main className="bg-slate-900 mt-10 mx-auto rounded-xl p-4 w-96 text-center">
                <h1 className="font-bold text-lg text-blue-800 mb-4">Usuario</h1>

                <div className="flex flex-col gap-2 mt-2 items-center ">
                    <Button  href="/usuario/new" icon={ <PlusIcon className="h-5 w-5"/> }>Cadastrar usuario</Button>
                    <Button icon={ <PencilIcon className="h-5 w-5"/> }>Editar cadastro</Button>
                    <Button href="/usuario/delete" icon={ <TrashIcon className="h-5 w-5"/> }>Deletar usuario</Button>
                </div>
            </main>
        </>
    )
}