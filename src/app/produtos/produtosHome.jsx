export default function ProdutoHome(produto, icon) {
  return (  
   <div className=" w-2/6 container h-24 mx-auto bg-black space-x-2 rounded-xl flex-col text-center py-4">
        <p>{produto.descricao}</p>
        <span>{produto.preco}</span>
        <span>{ icon }</span>
   </div>  
   )
}
