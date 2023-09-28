import Link from "next/link";
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import Button from "./button";


export default function NavBar() {
    return(
    <nav className='flex items-center justify-between bg-black pl-10 pr-5 h-24'>
    <ul className='flex items-end gap-32 mr-5'>
      <li> 
        <Link className="text-2xl" href="/">
          SneakerShop
        </Link>
      </li>
      <li><Link className='hover:text-gray-900' href="/novidades">Novidades</Link></li>
      <li><Link className='hover:text-gray-900' href="/ofertas">Ofertas</Link></li>
      <li><Link className='hover:text-gray-900' href="/ordenar">Ordenar</Link></li>
    </ul>

    <div className='w-36 h-6 mt-2 mr-4'>
      <input type="text" placeholder='Buscar' 
      className='rounded-xl w-36 pl-3 
      bg-[url("https://cdn-icons-png.flaticon.com/512/16/16492.png")]
      bg-[length:15px_15px]
      bg-no-repeat
      bg-[center_right_8px]'/>
    </div>

    <div className="flex ml-4">
        <Button href="/favoritos" icon={ <HeartIcon className="h-5 w-5" /> }></Button>
        <Button  href="/carrinho" icon={ <ShoppingCartIcon className="h-5 w-5"/> }></Button>
    </div>

    <div className='h-8 w-8 rounded-full overflow-hidden my-1'>
        <img src="https://github.com/pedro2398.png" alt="imagem usuario" />
    </div>
   </nav>
    )
}