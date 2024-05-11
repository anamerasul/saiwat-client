import Link from "next/link"
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from 'next/image';


const footerinfo = { 
   footerlinks: [ 
      { name:'About', link:'/about' },
      { name:'Products', link:'/products' },
      { name:'Contact', link:'/contact' },
      { name:'Quotation', link:'/quotation' },
   ],

   socialmedia: [ 
      { icon:FaFacebook, link:'/' },
      { icon:FaLinkedin, link:'#' },
      { icon:FaTelegram, link:'#' },
      { icon:BsTwitterX, link:'/' },
   ]
    
}

export default function Footer() {
   return (
      <footer className="w-full py-14 bg-slate-50 ">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
               <div className="flex justify-center">
               <Image
                  className="h-8 w-auto"
                  width={70}
                  height={70}
                  src="/images/sawlogo.png"
                  alt="Saw automation"
                />
               </div>
               <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
               {footerinfo.footerlinks.map((item) => (
                  <li key={item.name}><Link href={item.link} className="text-sm text-zinc-500 font-semibold hover:text-indigo-500">{item.name}</Link></li>
                ))}
               </ul>
               <div className="flex space-x-10 justify-center items-center mb-14">
                        <Link href="/" className="hover:text-indigo-600">
                               <FaFacebook className="text-2xl"/>
                          </Link>
                          <Link href="/" className="hover:text-indigo-600">
                               <FaLinkedin className="text-2xl"/>
                           </Link>
                           <Link href="/" className="hover:text-indigo-600">
                              <FaTelegram className="text-2xl"/>
                           </Link>
                           <Link href="/" className="hover:text-indigo-600">
                               <BsTwitterX className="text-2xl"/>
                          </Link>
               </div>
               <span className="text-md font-semibold text-gray-500 text-center block">2024 Saw automation. All rights reserved.</span>
            </div>
         </div>
      </footer>
   )
}
