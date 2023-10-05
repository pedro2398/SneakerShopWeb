import NavBar from "@/components/navbar";
import ProdutoHome from "@/app/produtos/produtosHome";

export default async function Home() {
  
  async function buscaProdutos() {
    const uri = "http://localhost:8080/produto"
    const produtos = await fetch(uri, {next: {revalidate: 0}})

    if(produtos.status !== 200) {
      alert("Erro ao carregar dados")
      return
    }

    return await produtos.json()
  }
  
  const produtos =  await buscaProdutos()  
  
  return (  
   <>
      <NavBar/>
      <main className=" flex items-stretch gap-4 bg-gray-900 mt-4 mx-auto rounded-xl max-w-[80%] px-3 py-3">    
          {produtos.map(produto => ProdutoHome( produto ))}
    </main>
   </>  
   )
}
