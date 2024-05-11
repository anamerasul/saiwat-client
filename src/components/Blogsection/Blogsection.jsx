import Link from "next/link" 
import Image from "next/image";
import axios from 'axios';

async function getBlogs() {
  try {
    const response = await axios.get(process.env.customUR + '/blogs?populate=*&filters[id][$lte]=3', {
      headers: {
        Authorization: 'Bearer ' + process.env.customTo,
      },
    });
    return response.data.data;
  } catch (error) {
    return error
  }
}

export default async function Blogsection() {
  try {
    const Blogsarray = await getBlogs();
    return (
      <div className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles and blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
                 Getting know about our latest articles and blogs 
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        </div>
      </div>
    )
    } catch (error) {
      return false;
    }
}
  
 
 