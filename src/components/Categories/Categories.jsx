import { CiBookmarkCheck } from "react-icons/ci";
import fill from '../../../public/images/fillout.png' 
import Image from "next/image";
import Link from "next/link"
 
export default function Categories() {
  return (
  <section className="bg-slate-50 pb-6 ">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-slate-50">


        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-500">Product categories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Discover a comprehensive array of automation categories
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore our industrial automation categories for a comprehensive selection of essential parts. We have what you need to keep your operations running smoothly.
          </p>
        </div>


            <div className="flex flex-wrap my-12">


                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                    <div className="flex items-center mb-6">
                        <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">Industrial automation parts</div>
                    </div>
                    <p className="leading-loose text-gray-500">Essential components for streamlining manufacturing and industry processes, including sensors, actuators, controllers, and robotic arms
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                    <div className="flex items-center mb-6">
                         <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">Test and measuring Instruments</div>
                    </div>
                    <p className="leading-loose text-gray-500">Tools designed to accurately gauge and evaluate various parameters in scientific, engineering, and industrial applications.
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                    <div className="flex items-center mb-6">
                       <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">Control components</div>
                    </div>
                    <p className="leading-loose text-gray-500">Essential devices regulating and managing processes in automation systems, including switches, relays, valves, and regulators.
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                        <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">Electromechanical</div>
                    </div>
                    <p className="leading-loose text-gray-500">Integration of electrical and mechanical components to create efficient and versatile systems for various applications
                    </p>
                </div>



                <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                    <div className="flex items-center mb-6">
                       <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">Tools and connectors</div>
                    </div>
                    <p className="leading-loose text-gray-500">Instruments and interfaces facilitating efficient assembly, maintenance, and connection of components in various electrical and mechanical systems.
                    </p>
                </div>



                <div className="w-full md:w-1/2 lg:w-1/3 p-8 ">
                  
                    <div className="flex items-center mb-6">
                         <CiBookmarkCheck className="text-3xl text-indigo-500"/>
                        <div className="ml-4 text-lg">hydraulics & pneumatics</div>
                    </div>
                    <p className="leading-loose text-gray-500">Utilizing fluid power to transmit force and motion, with hydraulics using liquids and pneumatics using gases, for diverse industrial applications.
                    </p>
                    
                </div>


            
            </div>
        </div>
    </div>

    <div>
      
              <div className="py-20">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                      <div className="flex flex-col gap-8 lg:flex-row items-center">
                          <div className="lg:w-1/2 ">
                          <h1 className="text-xl text-indigo-500 font-extrabold md:text-4xl mb-5"> 
                                            Do not see what you need ?
                                          </h1>
                                          <h1 className="mb-10 text-xl text-gray-800 font-semibold md:text-2xl"> 
                                          <Link
                                                 href="/quotation"
                                                 className="cursor-pointer underline underline-offset-8 text-indigo-500 font-extrabold"
                                             >
                                          
                                            Request your quotation 
                                       </Link>,
                                            
                                             we can provide items beyond the list to fullfill your requirements.
                                          </h1>

                               <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="flex flex-col bg-gray-200/50 p-8">
                                          <dt className="text-md font-semibold leading-6 text-gray-600">Main categories</dt>
                                          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">8</dd>
                                        </div>
                                        <div className="flex flex-col bg-gray-200/50 p-8">
                                          <dt className="text-md font-semibold leading-6 text-gray-600">Sub categories</dt>
                                          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">54</dd>
                                        </div>
                                          <div className="flex flex-col bg-gray-200/50 p-8">
                                          <dt className="text-md font-semibold leading-6 text-gray-600">Automation Products</dt>
                                          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">5,000</dd>
                                        </div>
                                        
                              </dl>

                          </div>
                          <div className="lg:w-1/3 lg:ml-28 ">
                               <Image src={fill} alt="Automation and electrical"   />
                          
                          </div>
                      </div>
                  </div>
              </div>

    </div>
</section>


  

  )
}
