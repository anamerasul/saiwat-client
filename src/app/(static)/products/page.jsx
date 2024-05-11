"use client"
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { IoIosFunnel } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";
import Loadingcomp from '@/components/Loadingcomp/Loadingcomp';
 
export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [products, setProducts] = useState([]);
  const [ categories, setCategories ] = useState ([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState( 1 );
  const itemsPerPage = 12;

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/categoireslist`);
      if (response.ok) {
        const catArray = await response.json();
        setCategories (catArray.categoriesarray)
        handleCategoryChange(1)
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

  const handleCategoryChange = async(categoryID) => {
    console.log (categoryID)
    setSelectedCategory(categoryID)
    try {
      const response = await fetch(`/api/productslist/${categoryID}`);
      if (response.ok) {
           const proArray = await response.json();
           console.log (proArray)
           setProducts(proArray.productsarray);
           setCurrentPage(1);
      } else {
        return false
      }
      } catch (error) {
        return false
      }
  }

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  useEffect(() => {
    if (products.length > 0) {
      const totalPages = Math.ceil(products.length / itemsPerPage);
      setTotalPages(totalPages);
    }
  }, [products]);
 

  return (
    <>
    { categories.length > 0  ? (
     <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <FaXmark className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                   
                    <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">Categories</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <FaMinus className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <HiPlus className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                              {categories.map((cat) => (
                                  <div key={cat.id} className="flex items-center">
                                    <input
                                          id={cat.id}
                                          name="cat-all"
                                          defaultValue={cat.id}
                                          type="radio"
                                          onChange={() => handleCategoryChange(cat.id)}
                                          checked={selectedCategory === cat.id}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={cat.attributes.title}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {cat.attributes.title}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Saw products</h1>

            <div className="flex items-center">
            
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <IoIosFunnel className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
             

                  <Disclosure as="div"  className="border-b border-gray-200 py-6" defaultOpen={true}>
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">Categories</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <FaMinus className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <HiPlus className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                          
                          {categories.map((cat, index) => (
                              <div key={cat.id} className="flex items-center">
                                <input
                                  id={cat.id}
                                  name="cat-all"
                                  defaultValue={cat.id}
                                  type="radio"
                                  onChange={() => handleCategoryChange(cat.id)}
                                  checked={selectedCategory === cat.id}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={cat.attributes.title}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {cat.attributes.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
      
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3"> 
              {paginatedProducts.length > 0 ? (

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-2">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="group relative shadow-lg p-6 rounded-lg">
             <div className='flex justify-between items-center mb-6'>
              <div>
              <span className='text-sm font-semibold'> {product.attributes.name}</span>
              <p className="text-xs font-medium text-gray-500">{product.attributes.serial}</p>
              </div>
           
              </div>
              <div className="flex justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-50">
                <Image
                    src={ 
                      `${ process.env.customFi}${product.attributes.picture.data.attributes.url}`
                    }
                  alt="Saw products automation"
                  height={150}
                  width={150}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-xs text-gray-400">{product.attributes.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         ) : (
              <div className='flex justify-center items-center mt-36 mb-20'>
                      <span className='font-semibold text-xl text-zinc-500'>No products found.</span>
              </div>

          )}
          {totalPages > 1 && (
            <section className='flex justify-center items-center'>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {[...Array(totalPages)].map((_, index) => (
                      
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 ${currentPage === index + 1 ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0' }`}
                      >
                        {index + 1}
                      </button>
                          ))}
                      </nav>
                    </div>
                  </div>
                </div>
            </section>
        )}

        
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    ) : (
          <Loadingcomp/>
          
        )}
    </>
  )
}
