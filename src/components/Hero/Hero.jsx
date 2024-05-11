"use client"
import Link from "next/link"
import Image from "next/image";
import im1 from '../../../public/images/1.jpeg'

export default function Hero() {
  return (
    <>
  <div className="bg-slate-50 p-15 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    
    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
    <svg
      className="absolute left-0 hidden h-full text-slate-50 transform -translate-x-1/2 lg:block pointer-events-none"
      viewBox="0 0 100 100"
      fill="currentColor"
      preserveAspectRatio="none slice"
    >
      <path d="M50 0H100L50 100H0L50 0Z" />
    </svg>

   
      <Image src={im1} alt="Automation and electrical"  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full" />
     

    </div>
    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-0 lg:my-28 lg:max-w-lg lg:pr-5">
      <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl mb-5"> 
                                        Power your projects with automation and <span className="font-semibold text-indigo-500">electrical parts.</span>
                                     </h1>
                                     <span className="font-light text-sm mt-11">
                                     SAW Industrial Automation is one of the suppliers of all kinds of electrical and electronic products here in Saudi Arabia, we caters products from more than 1,000 leading brand manufacturers.
                                     </span>
                                         <div className="mt-10 flex items-center gap-x-6">
                                             <Link
                                                 href="/products"
                                                 className="rounded-md bg-zinc-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                             >
                                                 Browse products
                                       </Link>
                                         <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                                              Getting know <span aria-hidden="true">→</span>
                                           </Link>
                                        </div>
      
      </div>
    </div>
  </div>
  </>
  )
}
