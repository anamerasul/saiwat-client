"use client"
import { Fragment } from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import Link from "next/link"
 
const solutions = [
    { name: 'Quotation', description: 'Get a quotation for your products', href: '/quotation', icon: FaWpforms },
  ]

  export default function Dropmenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-bold text-gray-900">
           Services
          <MdOutlineKeyboardArrowDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className=" overflow-hidden rounded-3xl bg-white text-sm  ">
          <div className="p-4 flex flex-col gap-3">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-3 p-4 rounded-lg hover:bg-gray-100">
                <div className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-indigo-500">
                  <item.icon className="h-5 w-5 text-white font-bold" aria-hidden="true" />
                </div>
                <div>
                <Menu.Item>
                {/* {({ active }) => (
                    <Link href={item.href} className="text-xs font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="text-xs mt-1 text-gray-600">{item.description}</p>
                )} */}
                 {({ active }) => (
                  <Link href={item.href} className="text-sm font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                  <p className="text-xs mt-1 text-gray-500">{item.description}</p>
                </Link>
                
              )}
              
                </Menu.Item>
                </div>
        
              </div>
            ))}
          </div>
         
        </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
