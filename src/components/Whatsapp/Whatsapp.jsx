import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 cursor-pointer bg-green-200 p-3 rounded-full">
       <Link href="https://wa.me/+966537537023" >
                 <IoLogoWhatsapp className="text-green-500 text-4xl" />
        </Link>
  </div>
  )
}
