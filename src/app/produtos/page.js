import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import Button from "../../components/button";

export default function ProdutoHome(produto) {

     const formatBRL = (value) => {
          return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
     }

     return (  
     <div className="w-80 container bg-black space-x-2 rounded-xl flex-col text-center pt-4">
          <p>{produto.descricao}</p>
          <span>{formatBRL(produto.preco)}</span>
          <div className='flex px-28'>
               <Button icon={ <ShoppingCartIcon className='h-5 w-5'/> } ></Button>
               <Button icon={ <HeartIcon className='h-5 w-5'/> } ></Button>
          </div>
     </div>  
     )
}
