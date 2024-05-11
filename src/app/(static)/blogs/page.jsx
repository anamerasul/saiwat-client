import axios from 'axios';
import Link from "next/link"
import Image from 'next/image';
import ship from '../../../../public/images/hero2.jpg'

async function getBlogs() {
  try {
    const response = await axios.get(process.env.customUR + '/blogs?populate=*', {
      headers: {
        Authorization: 'Bearer ' + process.env.customTo,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch resources');
  }
}

export default async function Blogs() {
  try {
    const Blogsarray = await getBlogs();
    return (
      <section className="">
       <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <Image src={ship} alt="Saw automation"  className="brightness-50 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
              <div className="container mx-auto px-6 p-6">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight leading-9 text-white sm:text-4xl">
                            Exploring the Latest in Automation and Electrical Components.
                        </p>
                    </div>
               </div>
          </div> 
      </div> 
      <div className="bg-white p-10 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Blogsarray.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Image
                        src={`${process.env.customFi}${post.attributes.image.data.attributes.url}`}
                        alt="Saw automation and electrical"
                        width={316}
                        height={200}
                        className="border object-cover object-center outline outline-offset-2 outline-2"
                        style={{ height: '200px', width:'26rem' }} 
                     />   
               </div>
                <div className="flex items-center gap-x-4 text-xs mt-6 pl-1">
                  <time dateTime={post.attributes.datetime} className="font-semibold text-gray-500">
                    {post.attributes.date}
                  </time>
                  <span className="cursor-defaul relative z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">
                    {post.attributes.category}
                  </span>
                </div>
                <div className="group relative  pl-1">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.attributes.title} 
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.attributes.desc}</p>
                </div>
              </article>
            ))}
          </div>
     </section>
    );
  } catch (error) {
    return false;
  }
}
 