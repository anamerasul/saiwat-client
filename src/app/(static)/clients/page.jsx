const partnerslist = [
    { path: '/clients/1.png', alt: 'Automation Saw' },
    { path: '/clients/2.png', alt: 'Automation and electrical parts' },
    { path: '/clients/3.png', alt: 'Automation parts' },
    { path: '/clients/4.png', alt: 'electrical parts' },
    { path: '/clients/5.png', alt: 'electricals' },
 
]
import Image from 'next/image';

export default function page() {
  return (
    <div className="">
         <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-28 mx-auto bg-slate-50">
            <div className="sm:w-2/4 xl:w-2/4 mx-auto text-center mb-6 md:mb-12">
                  <p className="text-xl font-semibold leading-7 text-indigo-500">Our clients</p>
                   <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Driving our passion for excellence and innovation.</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6	 p-20 rounded-lg">
                    {partnerslist.map((pl) => (
                        <div key={pl.path} className="p-4 md:p-7 bg-slate-50 rounded-lg">
                        <Image
                        className="py-1 lg:py-2 w-16 h-auto md:w-20 lg:w-24 mx-auto"
                        src={pl.path}
                        alt={pl.alt}
                        width={416}
                        height={400}
                    />
                      </div>
                         
                    ))}
            </div>
    </div>
  )
}
