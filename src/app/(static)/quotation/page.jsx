"use client"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { BsSendFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IoCheckmarkSharp,IoArrowDown } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import Loadingcomp from '@/components/Loadingcomp/Loadingcomp';
import ship from '../../../../public/images/ship2.jpg'
import Image from "next/image";
 const citiesList = [
  { id: 1, name: 'Riyadh' },
  { id: 2, name: 'Jeddah' },
  { id: 3, name: 'Mecca' },
  { id: 4, name: 'Medina' },
  { id: 5, name: 'Dammam' },
  { id: 6, name: 'Khobar' },
  { id: 7, name: 'Tabuk' },
  { id: 8, name: 'Buraidah' },
  { id: 9, name: 'Taif' },
  { id: 10, name: 'Hail' },
  { id: 11, name: 'Najran' },
  { id: 12, name: 'Al Qassim' },
  { id: 13, name: 'Al-Ahsa' },
  { id: 14, name: 'Yanbu' },
  { id: 15, name: 'Jubail' },
  { id: 16, name: 'Abha' },
  { id: 17, name: 'Khamis Mushait' },
  { id: 18, name: 'Hafr Al-Batin' },
  { id: 19, name: 'Hofuf' },
  { id: 20, name: 'Arar' }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Quotation() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false);
  const [selected, setSelected] = useState(citiesList[0])
  const [ categories, setcategories ] = useState ([])
  const [selectedCat, setSelectedCat] = useState( null );
  const [formData, setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      city: "",
      details: "",
      companyname: '',
      category: '',
    });
    const [errors, setErrors] = useState({});

    const handleSelectionChange = (selectedCity) => {
      setSelected(selectedCity);
    };

    const handleCategoryChange = (selectedCity) => {
      setSelectedCat(selectedCity);
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/categoireslist`);
        if (response.ok) {
          const catArray = await response.json();
               setcategories(catArray.categoriesarray);
               setSelectedCat(catArray.categoriesarray[0].attributes.title);
        } else {
           return false;
        }
      } catch (error) {
        return false;
      }
      return;
    };

    useEffect(() => {
      fetchData();
    }, []);  

   

  const validateForm = () => {

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 50) {
      newErrors.fullName = 'Full name must be between 3 and 50 characters';
    }

    if (!formData.companyname.trim()) {
      newErrors.companyname = 'Please enter Company name';
    } else if (formData.companyname.trim().length < 3 || formData.fullName.trim().length > 50) {
      newErrors.companyname = 'Company name must be between 3 and 50 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter phone Number';
    } else if (formData.phoneNumber.trim().length < 5 || formData.fullName.trim().length > 10) {
      newErrors.phoneNumber = 'Phone number must be between 5 and 10 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please provide some details';
    } else if (formData.details.trim().length < 10 || formData.details.trim().length > 400) {
      newErrors.details = 'Details must be between 10 and 400 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastSubmitTimeQu');
    if (lastSubmitTime && Date.now() - parseInt(lastSubmitTime, 10) < 5 * 60 * 1000) {
      setSubmitting(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      formData.city = selected.name;
      formData.category = selectedCat;
       try {
           setSubmitting(true);
           const response = await fetch('/api/apquotation', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                  'content-type': 'application/json'
                    }
            });

            setFormData({
              fullName: "",
              phoneNumber: "",
              email: "",
              details: "",
              companyname: '',
              });
              if (response.status === 200) {
                toast({
                  title: (
                    <div className="flex items-center">
                      <IoCheckmarkCircleSharp className="text-green-400 mr-2 text-3xl" />
                      Your message has been sent successfully.
                    </div>
                  ),
                });
                localStorage.setItem('lastSubmitTime', Date.now());
                setTimeout(() => {
                  setSubmitting(false);
                }, 5 * 60 * 1000);
              } else {
                toast({
                  title: (
                    <div className="flex items-center">
                      <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
                      There was an error on the server side, please try again later.
                    </div>
                  ),
                });
                setSubmitting(false);
              }
            } catch (error) {
              console.error('Error submitting form:', error);
              toast({
                title: (
                  <div className="flex items-center">
                    <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
                    There was an error, please try again later.
                  </div>
                ),
              });
              setSubmitting(false);
            }
          } else {
            toast({
              title: (
                <div className="flex items-center">
                  <FaRegCircleXmark className="text-red-400 mr-2 text-3xl" />
                  The information you entered is incorrect.
                </div>
              ),
            });
            setSubmitting(false);
          }
        };


  return (
    <>
      { categories.length > 0  ? (
      <div className="flex flex-col"> 
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-50 -z-[1]">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Request quotation with <span className="text-indigo-500">SAW</span></h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Please fill out the form below with your requirements, and we will get back to you with a competitive quotation as soon as possible.</p>
              </div>
              <div className="relative ms-4">
                    <Image src={ship} alt="Saw automation" className="w-full rounded-md" />
                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-indigo-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="-mt-7 sm:-mt-10 w-11/12 sm:w-3/5 bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 mx-auto mb-10">
                     {submitting ? 
                                <div className="flex items-center justify-center mb-5">
                                  <span className="text-red-400 font-semibold">Note: You have to wait to send another request</span>
                                </div>
                              :
                              ''
                      }
                    <div className="grid grid-cols-2 gap-4">
                      
                            <div>
                          
                                  <label htmlFor="full-name" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <FaUser className="text-md"/>Your full name  
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="full-name"
                                      id="full-name"
                                      autoComplete="given-name"
                                      value={formData.fullName}
                                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                   
                                      className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                            </div>

                            <div>
                                  <label htmlFor="phonenum" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <FaPhoneAlt className="text-md"/>Phone number 
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="number"
                                      name="phonenum"
                                      id="phonenum"
                                      autoComplete="given-phone"
                                      value={formData.phoneNumber}
                                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                      className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                            </div>
                           

                    </div>
                 {/* inputs starts !!!!!!!!!!! */}
                       <div className="grid grid-cols-2 gap-4 mt-7">
                            <div>
                                  <label htmlFor="email" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <MdEmail className="text-md"/>Your Email
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="email"
                                      id="email"
                                      autoComplete="given-email"
                                      value={formData.email}
                                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
   
                                      className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                            </div>
                    

                            <div>
                                  <label htmlFor="phonenum" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <IoEarth className="text-md"/>Your city
                                  </label>
                                  <Listbox value={selected} onChange={handleSelectionChange}>
                                      {({ open }) => (
                                        <>
                                          <div className="relative mt-2">
                                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                              <span className="flex items-center">
                                                <span className="ml-3 block truncate">{selected.name}</span>
                                              </span>
                                              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <IoArrowDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                              </span>
                                            </Listbox.Button>

                                            <Transition
                                              show={open}
                                              as={Fragment}
                                              leave="transition ease-in duration-100"
                                              leaveFrom="opacity-100"
                                              leaveTo="opacity-0"
                                            >
                                              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {citiesList.map((city) => (
                                                  <Listbox.Option
                                                    key={city.id}
                                                    className={({ active }) =>
                                                      classNames(
                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                                      )
                                                    }
                                                    value={city}
                                                  >
                                                    {({ selected, active }) => (
                                                      <>
                                                        <div className="flex items-center">      
                                                          <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                          >
                                                            {city.name}
                                                          </span>
                                                        </div>

                                                        {selected ? (
                                                          <span
                                                            className={classNames(
                                                              active ? 'text-white' : 'text-indigo-600',
                                                              'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                          >
                                                            <IoCheckmarkSharp className="h-5 w-5" aria-hidden="true" />
                                                          </span>
                                                        ) : null}
                                                      </>
                                                    )}
                                                  </Listbox.Option>
                                                ))}
                                              </Listbox.Options>
                                            </Transition>
                                          </div>
                                        </>
                                      )}
                                  </Listbox>
                            </div>

                    </div>
                     
                     
                    <div className="grid grid-cols-2 gap-4 mt-7">
                         <div className="">
                                  <label htmlFor="email" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <MdEmail className="text-md"/>Your Company name
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="company"
                                      id="company"
                                      autoComplete="given-company"
                                      value={formData.companyname}
                                      onChange={(e) => setFormData({ ...formData, companyname: e.target.value })}
                                      className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                  
                            </div>

                            <div>
                                  <label htmlFor="phonenum" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                  <MdMenu className="text-md"/>Category
                                  </label>
                                  <Listbox value={selectedCat} onChange={handleCategoryChange}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selectedCat}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <IoArrowDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories.map((cat) => (
                  <Listbox.Option
                    key={cat.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={cat.attributes.title}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">      
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {cat.attributes.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <IoCheckmarkSharp className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
                                  </Listbox>
                             </div>
                           
                      </div>
                    <div className="mt-3"> 
                              <label htmlFor="about" className="text-indigo-500 flex gap-2 items-center text-sm font-medium leading-6">
                                <TbListDetails className="text-md"/> Details
                             </label>
                             <div className="mt-2">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows={3}
                                  value={formData.details}
                                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                  className="p-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                         </div>
                         {/* disabled={submitting} */}
                         <button  className="mt-5 w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-900 transition-all duration-300 shadow-sm text-white text-base font-semibold leading-6 flex gap-3 items-center justify-center">
                            Send quotation
                            <BsSendFill className="text-xl"/>
                        </button>
            </form>

    </div>
    ) : (
      <Loadingcomp/>
    )}
    </>
  )
}
