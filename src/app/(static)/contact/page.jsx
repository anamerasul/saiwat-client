"use client"
import { BsSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";  
import { MdLocationPin } from "react-icons/md";
import im1 from '../../../../public/images/contact.png'
import Image from "next/image";


export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        details: ""
    });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3 || formData.fullName.trim().length > 50) {
      newErrors.fullName = 'Full name must be between 3 and 50 characters';
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

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    if (lastSubmitTime && Date.now() - parseInt(lastSubmitTime, 10) < 5 * 60 * 1000) {
      setSubmitting(true);
    }
  }, []);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        setSubmitting(true);
        const response = await fetch('/api/apcontact', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'content-type': 'application/json'
          }
        });
   
        setFormData({
          fullName: "",
          email: "",
          details: ""
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
    <section className="overflow-hidden">
        <div className="bg-slate-50 py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className=" text-[#333]">
          <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
            <h2 className="md:max-w-5xl lg:text-5xl md:text-5xl text-3xl font-extrabold lg:!leading-[55px]"><span className="text-indigo-500">Contact us</span> anytime for professinal assistance</h2>
            <div className="grid md:grid-cols-2 gap-20 mt-5">
              <div>
                <p className="text-base leading-relaxed ">
                  
                Stay connected with us on social media for the latest updates, product announcements, and exclusive promotions!
                </p>
              
                
                <div className="lg:col-start-2 lg:max-w-2xl">
                         <ul className="mt-8 space-y-5 font-medium">
                            <li className="flex items-start lg:col-span-1">
                                    <div className="flex gap-3">
                                      <span className="p-2 rounded-full bg-indigo-100/80">
                                            <MdEmail className="text-2xl text-indigo-500" />
                                      </span>
                                      <p className="mt-2 font-semibold text-black">sales@sawiat.com</p>
                                  </div>
                            </li>
                            <li className="flex items-start lg:col-span-1">
                                    <div className="flex gap-3">
                                      <span className="p-2 rounded-full bg-indigo-100/80 ">
                                            <FaPhoneAlt className="text-2xl text-indigo-500" />
                                      </span>
                                      <p className="mt-2 font-semibold text-black">+966 537 537 023</p>
                                  </div>
                            </li>
                            <li className="flex items-start lg:col-span-1">
                                   <div className="flex gap-3">
                                              <span className="p-2 rounded-full bg-indigo-100/80">
                                                      <MdLocationPin className="text-2xl text-indigo-500" />
                                              </span>
                                          <p className="mt-2 font-semibold text-black">World Trade Center Al Ahwas Street,Jeddah.</p>
                                  </div>
                            </li>
                        </ul>
                    </div>



              </div>
            <div>
                  <Image src={im1} alt="Saw automation"  className="shrink-0 w-full h-10/12 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

     
    </div>
          </div> 

            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto bg-white py-12">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-24   max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                    <div className="flex flex-col justify-between">
                          <div className="flex flex-col gap-4">
                                <span className="text-2xl font-semibold text-indigo-500">Explore the Area Below</span>
                                <span className="text-sm font-semibold text-grey-500">Visit Us and Discover the Difference. We eagerly await your arrival at our location. Come and experience the wonders that await you firsthand. We look forward to seeing you soon.</span>
                          </div>
                          <iframe
                            width="600"
                            height="350"
                            style={{ border: '0' }}
                            className="rounded-lg"
                            loading="lazy"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFONC4uUFVNftt16BtTEBRs99EGysVzWE
                              &q=World+Trade+Center,+As+Safa+Dist,+Al+Ahwas+Street,+Jeddah+23456">
                          </iframe>
                    </div>
                    <form action="" className="h-fit bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                        <div className="relative mb-8">
                           {submitting ? 
                                <div className="flex items-center justify-center mb-5">
                                  <span className="text-red-400 font-semibold">Note: You have to wait to send another request</span>
                                </div>
                              :
                              ''
                            }
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
                                      required
                                    />
                                  </div>
                        </div>
                        <div className="relative mb-8">
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
                                      required
                                    />
                                  </div>
                        </div>
                        <div className="relative mb-8">
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
                                  required
                                />
                            </div>
                        </div>
                        <button disabled={submitting} type="submit" onClick={handleSubmit} className="w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-900 transition-all duration-300 shadow-sm text-white text-base font-semibold leading-6 flex gap-3 items-center justify-center">
                                Send message
                                <BsSendFill className="text-xl" />
                         </button>

                    </form>

                </div>
            </div>
        </section>
    )
}
