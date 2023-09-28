import NavBar from "@/components/navbar";

export default function Ofertas() {
  return (  
   <>
      <NavBar/>
      <main className=" flex flex-col gap-2 text-center container bg-gray-900 mt-10 mx-auto rounded-xl max-w-lg pb-3">    
        <h1 className="mt-3 mx-auto">Ofertas</h1>
        <p>Ainda não temos ofertas disponiveis</p>
    </main>
   </>  
   )
}
