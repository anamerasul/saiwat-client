import Link from "next/link" 
import Image from "next/image";
import axios from 'axios';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

async function getSelectedBlog( ) {
  try {
    const response = await axios.get(process.env.customUR + '/blogs?populate=*', {
      headers: {
        Authorization: 'Bearer ' + process.env.customTo,
      },
    });
    return response.data.data;
  } catch (error) {
    return error
  }
}

export default async function Post({params}) {
  try {
    const Blogsarray = await getSelectedBlog( );
    const CurrentBlog = Blogsarray.find(post => String(post.id) === String(params.id));
    return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-16">
       <section className="relative pb-24 text-center">
         <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
                <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6 mb-3">
                       {CurrentBlog.attributes.date}
                 </p>
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
                    <span className="inline-block">{CurrentBlog.attributes.title}</span>
                </h1>

                <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
                    <span className="inline-block">
                         {CurrentBlog.attributes.secondTitle} 
                    </span>
                </p>
                <div className='flex justify-center mt-8'>
                    <Image
                          src={`${process.env.customFi}${CurrentBlog.attributes.image.data.attributes.url}`}
                          alt="Saw automation & electrical parts"
                          className="rounded-lg border object-cover object-center outline outline-offset-2 outline-2"
                          height={900}
                          width={900}
                          style={{ height: '400px', width:'54rem' }} 
                      />
                </div>
           </div>
      </section>
      <section className="relative">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
            <p className="font-semibold text-lg leading-8 text-gray-600 mb-8">
              <span className="inline-block h-1 w-10 bg-indigo-500 mr-2"></span>
              {CurrentBlog.attributes.desc} 
            </p>
          
            <p className="font-semibold text-lg leading-8 text-gray-600 mb-8">
              <span className="inline-block h-1 w-10 bg-indigo-500 mr-2"></span>
              {CurrentBlog.attributes.secondDesc} 
            </p>
        </div>
      </section> 
    </div>

    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Read more <span className="text-indigo-600">blogs</span></h2>
              <p className="text-gray-500 font-semibold text-lg mb-10 max-lg:max-w-xl max-lg:mx-auto">
                
                   your go-to destination for insightful content, creative inspiration, and thought-provoking discussions. Whether you are a seasoned professional, an aspiring artist, or simply someone with a curious mind, our blog has something for you.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="flex justify-center items-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            {Blogsarray.slice(-2).map(bpost => (
              <div key={bpost.id} className="w-full max-lg:max-w-xl lg:w-1/2 group">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <Image
                        src={`${ process.env.customFi}${bpost.attributes.image.data.attributes.url}`}
                        alt="Automation parts and electrical"
                        width={316}
                        height={200}
                        className="mb-3 rounded-lg border object-cover object-center outline outline-offset-2 outline-2"
                        style={{ height: '200px', width:'26rem' }} 
                     />
               </div>
                <h3 className="text-md font-semibold text-grey-800 leading-8 mb-4">{bpost.attributes.title}</h3>
                <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                   {bpost.attributes.desc.length > 150 ? bpost.attributes.desc.slice(0, 150) + "..." : bpost.attributes.desc}
                </p>
                <Link href={`/blog/${bpost.id}`} className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold">
                  Read more <MdKeyboardDoubleArrowRight className="text-2xl"/>
                </Link>
              </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
    } catch (error) {
      return <div>error</div>;
    }
    
}
  