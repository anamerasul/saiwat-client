import Link from "next/link"
import { IoIosPricetag } from "react-icons/io";
import { LuArrowUpNarrowWide } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaBoxes } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import im1 from '../../../../public/images/groupimgs.png'
import ship from '../../../../public/images/automation.jpg'
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const standards = [
  { name: 'Competitive Prices', icon: IoIosPricetag, description: 'We offer competitive prices without compromising on quality, making automation and electrical parts accessible to all.' },
  { name: 'Wide range', icon: LuArrowUpNarrowWide, description: 'Our diverse product range caters to various industries and applications, ensuring there is something for everyone.' },
  { name: 'Prompt Delivery', icon: TbTruckDelivery, description: ' We understand the importance of timely delivery. Count on us to get your products to you quickly and efficiently.' },
  { name: 'Trusted by Customers', icon: GrGroup, description: 'Join thousands of satisfied customers who rely on us for their automation and electrical needs.' },
]

export default function page() {
  return (
    <main className="about-section">
      <div className="bg-slate-50 py-16 sm:py-16 bg-zinc-50 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className=" text-[#333]">
          <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
            <h2 className="  md:max-w-5xl  lg:text-5xl md:text-5xl text-3xl font-extrabold lg:!leading-[55px]"><span className="text-indigo-500">Saw Company</span> for Electrical and Automation parts</h2>
            <div className="grid md:grid-cols-2 gap-20 mt-5">
              <div>
                <p className="text-base leading-relaxed ">Join our extensive network of satisfied clients! With more than 100 trusted clients, we are committed to delivering excellence tailored to your needs.</p>
              
                
                <div className="lg:col-start-2 lg:max-w-2xl">
                        <ul className="mt-8 space-y-5 font-medium">
                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                      <FaCheckCircle className="text-indigo-500 text-lg" />
                                </div>
                                <p className="ml-3 leading-5 text-gray-600">
                                    Expert Guidance
                                </p>
                            </li>
                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                    <FaCheckCircle className="text-indigo-500 text-lg" />
                                </div>
                                <p className="ml-3 leading-5 text-gray-600">
                                    Consolidated Sourcing
                                </p>
                            </li>
                            <li className="flex items-start lg:col-span-1">
                                <div className="flex-shrink-0">
                                  <FaCheckCircle className="text-indigo-500 text-lg" />
                                </div>
                                <p className="ml-3 leading-5 text-gray-600">
                                  Streamlined Operations
                                </p>
                            </li>
                        </ul>
                    </div>

                        <div className="mt-16 ">
                  <div className="max-w-4xl mx-auto">
                    <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                      <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                          Founded date
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-500 dark:text-indigo-100">
                          2016
                        </dd>
                      </div>
                      <div
                        className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                          Products
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-500 dark:text-indigo-100">
                          5,500
                        </dd>
                      </div>
                      <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                          Suppliers
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-500 dark:text-indigo-100">
                          15+
                        </dd>
                      </div>
                    </dl>
                  </div>
                        </div>




              </div>
            <div>
 
                   <Image src={im1} alt="Saw automation"  className="shrink-0 w-full h-10/12" />
     
            </div>
          </div>
        </div>
      </div>

     
    </div>
          </div>





     <div>
      <section className="relative">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                  <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                        Welcome to <span className="border-b border-dotted border-slate-300 text-indigo-500">SAW COMPANY</span>
                  </p>
                  <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                      <span className="inline-block">Your Parts in your hands.</span>
                  </h1>

                  <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                      <span className="inline-block">
                        One of the suppliers of all kinds of electrical and electronic products
                      </span>
                  </p>
          </div>


    <div className="relative isolate overflow-hidden bg-white px-6 py-24  lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-xl font-semibold leading-7 text-indigo-500">About us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Providing best products</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                    SAW Industrial Automation is one of the suppliers of all kinds of electrical and electronic products here in Saudi Arabia, we caters
                    products from more than 1,000 leading brand
                    manufacturers. We supply exclusively for the
                    Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
     
            <Image src={ship} alt="Saw automation" className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
     
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Founded in 2016, SAW Industrial Automation has quickly emerged as a key player in the Saudi Arabian automation market. Our commitment todelivering high-quality solutions tailored to the needs of our customershas fueled our rapid growth and success in a relatively short period.
              </p>
              <ul role="list" className="mt-8 space-y-8">
                <li>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
                              <GrGroup className="text-2xl text-white"/>
                        </div>
                      </div>
                      <div className="mt-1">
                        <h6 className="mb-3 text-xl font-extrabold leading-5">
                        Expert Guidance
                        </h6>
                        <p className="text-sm font-semibold text-gray-500">
                        Our experienced engineers handle all aspects of procurement, ensuring a seamless experience while delivering tailored solutions to meet your specific requirements.

                        </p>
                      </div>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
                              <FaBoxes className="text-2xl text-white"/>
                        </div>
                      </div>
                      <div className="mt-1">
                        <h6 className="mb-3 text-xl font-extrabold leading-5">
                            Consolidated Sourcing
                        </h6>
                        <p className="text-sm font-semibold text-gray-500">
                           With us, you can consolidate your automation parts sourcing needs into a single point of contact, eliminating the hassle of dealing with multiple suppliers.

                        </p>
                      </div>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col max-w-md sm:flex-row">
                      <div className="mb-4 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
                              <FaCogs className="text-2xl text-white"/>
                        </div>
                      </div>
                      <div className="mt-1">
                        <h6 className="mb-3 text-xl font-extrabold leading-5">
                        Streamlined Operations
                        </h6>
                        <p className="text-sm font-semibold text-gray-500">
                        By entrusting us with your procurement needs, you can focus on your core business operations with confidence in the expertise and support we provide.

                        </p>
                      </div>
                    </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>

      
   <section className="py-14 lg:py-24 relative  ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
              <p className="text-3xl font-semibold leading-7 text-indigo-500 mb-5">Our stats</p>
              <h1 className="mt-2 text-xl font-semibold leading-7 text-gray-900 sm:text-2xl">Take a closer look at some of our key statistics to discover what sets us apart and fuels our drive for innovation and customer satisfaction.</h1>
          
              </div>
            </div>
            <div className="">
              <div className="p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]">
                <div className="shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-2 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
                  <div className="text-center">
                    <h3 className="text-4xl font-extrabold"><span className="text-blue-600">5,500</span></h3>
                    <p className="text-gray-500 font-semibold mt-3">Total Products</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-extrabold"><span className="text-blue-600">12</span></h3>
                    <p className="text-gray-500 font-semibold mt-3">Suppliers</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-extrabold"><span className="text-blue-600">10</span></h3>
                    <p className="text-gray-500 font-semibold mt-3">Years</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-extrabold"><span className="text-blue-600">62</span></h3>
                    <p className="text-gray-500 font-semibold mt-3">Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  




    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Our products has the best quality standards</h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">Our top-quality products are designed to optimize efficiency and streamline operations. </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        {standards.map((item) => (
          <div key={item.name} className="group relative w-full bg-slate-50  rounded-2xl p-4 transition-all shadow-lg duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4">
            <div className="bg-indigo-500 rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                 <item.icon className="h-6 w-6 text-white" aria-hidden="true" /> 
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500"> {item.name}</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5">
                {item.description}
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>         
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
                  Keep in touch  
            </h2>
            <p className="text-xl text-indigo-100">
            Contact us today to power up your projects!
            </p>
          </div>
          <Link href="/contact" className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500">
            Get In Touch
            <RiArrowRightDoubleFill className="text-3xl"/>
          </Link>
        </div>
      </div>
    </section>               
    </main>
  )
}
