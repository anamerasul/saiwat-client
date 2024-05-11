"use client"
import { Disclosure } from '@headlessui/react'
import { HiBars3, HiXMark } from "react-icons/hi2";
import Image from 'next/image';
import Dropmenu from './Dropmenu.jsx'
import Link from "next/link"

const navigation = [
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Suppliers', href: '/suppliers', current: false },
  { name: 'Clients', href: '/clients', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Mynav() {
  return (
    <Disclosure as="nav" className="bg-slate-50 top-0 w-full z-10">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                {open ? (
                  <HiXMark className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                
                                
                <Link  href="/"
                          >
                              <Image
                                  className="h-8 w-auto"
                                  width={70}
                                  height={70}
                                  src="/images/sawlogo.png"
                                  alt="Saw automation"
                                />
                        </Link>

              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link 
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-black hover:bg-blue-500 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}>
                       {item.name}
                   </Link>
                  ))}
                </div>
                
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
                  
                <Dropmenu/>  
        
        
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
           <Link 
           key={item.name}
          href={item.href}
          className={classNames(
            'text-black hover:bg-blue-500 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          )}>
              {item.name}
         </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}
