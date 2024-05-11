 
"use client"
 
import { BsUiChecks } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
 

export default function Orderstatus() {
  const { toast } = useToast()
  const steps = [
    { name: 'Order received', status: 'Order received' },
    { name: 'Processing', status: 'Processing' },
    { name: 'Shipped', status: 'Shipped' },
    { name: 'On the way', status: 'On the way' },
    { name: 'Delivered', status: 'Delivered' }
  ];

  const [formData, setFormData] = useState({
    orderCode: "",
  });
  let [isOpen, setIsOpen] = useState(false)
  const [selectedStep, setSelectedStep] = useState(null);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleStepClick = (step) => {
    setSelectedStep(step);
    openModal();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.orderCode.trim()) {
      toast({
        title: (
          <div className="flex items-center">
            <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
            Please enter order code
          </div>
        ),
      });
      return false;
    } else if (formData.orderCode.trim().length != 9 ) {
      toast({
        title: (
          <div className="flex items-center">
            <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
            Order code must be 9 characters long
          </div>
        ),
      });
      return false; 
    } else {
      try {
       
        const response = await fetch(`/api/orders/${formData.orderCode}`);
        if (response.ok) {
                   const orderdata = await response.json();
                   handleStepClick (orderdata.orderStatus)
               
        } else {
          return toast({
            title: (
              <div className="flex items-center">
                   <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
                    Error please try again later
              </div>
            ),
          });
        }
        } catch (error) {
          return toast({
            title: (
              <div className="flex items-center">
                   <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
                    {error.message}
              </div>
            ),
          });
        }

    }
    
  };
  return (
    <>
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6 lg:px-8">
   
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Check your order status.</h2>
          <p className="mt-4 text-sm  text-gray-600">
               To check your order status, please provide the order number or relevant details, and we will assist you further.
          </p>
          <div className="mt-10 flex max-w-md gap-x-1">
           <section>
                <div className="flex max-w-lg gap-x-7">
                <input
                  id="ordercode"
                  name="ordercode"
                  type="text"
                  required
                  value={formData.orderCode}
                  onChange={(e) => setFormData({ ...formData, orderCode: e.target.value })}
                  className="min-w-72 flex-auto rounded-md border-0 bg-indigo-900/5 px-5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/15 focus:ring-1.5 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your order code"
                />
                <button
                   type="submit"
                   onClick={handleSubmit}
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Check status
                </button>
                </div>
            </section>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start relative">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <BsUiChecks className="h-6 w-6 text-white" aria-hidden="true" />
             </div>
             <div className="mt-12">
                    <dt className="mt-4 font-semibold">Order status</dt>
                    <dd className="mt-2 leading-7 text-gray-500">
                    Locate your order with this field. Enter your order details to find its current status.
                    </dd>
             </div>
          </div>
          <div className="flex flex-col items-start relative">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <FaBoxOpen className="h-6 w-6 text-white" aria-hidden="true" />
             </div>
             <div className="mt-12">
                    <dt className="mt-4 font-semibold">Package journey</dt>
                    <dd className="mt-2 leading-7 text-gray-500">
                    Follow your package journey from our warehouse to your doorstep or location.
                    </dd>
             </div>
          </div>
        </dl>
      </div>
    </div>
     
  </div>

  <Transition  show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-8"
                  >
                    Your order status
                  </Dialog.Title>
                  <div className="mt-2 mb-10">
                  <div className="flex items-start max-w-screen-lg mx-auto">
      {steps.map((step, index) => {
        const completed = index <= steps.findIndex(s => s.status === selectedStep) && step.status !== 'Delivered';

        return (
          <div className="w-full" key={index}>
            <div className="flex items-center w-full">
              <div className={`w-8 h-8 shrink-0 mx-[-1px] p-1.5 flex items-center justify-center rounded-full ${completed ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className="text-base text-white font-bold">{index + 1}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-full h-1 mx-4 rounded-lg ${completed || step.status === selectedStep ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              )}
            </div>
            <div className="mt-2 mr-4">
              <h6 className={`text-base font-bold ${completed ? 'text-blue-500' : 'text-gray-500'}`}>{step.name}</h6>
              <p className="text-xs text-gray-400">{completed ? 'Completed' : 'Pending'}</p>
            </div>
          </div>
        );
      })}
    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

  </>
  )
}
