import Button from "@/components/button";
import NavBar from "@/components/navbar";
import Link from "next/link";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (  
    <main className=" flex flex-col gap-2 items-start container bg-gray-900 mt-10 mx-auto rounded-xl max-w-lg pb-3">    
        <h1 className="mt-3 mx-auto">Pagina não encontrada</h1>
        <Button href="/" icon={ <ArrowUturnLeftIcon className="h-4 w-4 mb-auto"/> }>Voltar para a Home</Button>
    </main>
   )
}
