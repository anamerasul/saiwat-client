const partnerslist = [
    { path: '/partners/1.png', alt: 'Automation Saw' },
    { path: '/partners/6.png', alt: 'electrical and automation' },
    { path: '/partners/3.png', alt: 'Automation parts' },
    { path: '/partners/4.png', alt: 'electrical parts' },
    { path: '/partners/7.png', alt: 'electrical and automation' },
  ]
import Image from 'next/image';

export default function Partners() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
             {partnerslist.map((pl) => (
               <Image
                 key={pl.path}
                 className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                 src={pl.path}
                 alt={pl.alt}
                 width={416}
                 height={400}
                 style={{ height: '150px', width: '150px' }} 
               />
              ))}
          </div>
        </div>
      </div>
    )
  }
  