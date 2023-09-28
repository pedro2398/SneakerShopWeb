import Link from "next/link";

export default function Button({children, icon, ...props}) {
  return (  
    <Link  href="#"{...props} className="bg-black text-sm rounded-2xl flex text-white py-2 px-2 mx-auto my-3 gap-3">
      { children }
      { icon }
    </Link>
   )
}