import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { IoInfiniteSharp } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import Stats from "./Stats";

const features = [
  {
    name: 'Best shipping',
    description:
      'We offer free shipping for the orders over 5,000 SAR and for the below we handle the half of the cost',
    icon: LiaShippingFastSolid,
  },
  {
    name: 'Timing matters',
    description:
      'With our reliable products and expert support, you can optimize your workflow, minimize downtime, and stay ahead of the competition. ',
    icon: MdOutlineAccessTimeFilled,
  },
  {
    name: 'Wide range',
    description:
      'From common replacements to hard-to-find items, our extensive catalog covers all your needs.',
    icon: IoInfiniteSharp,
  },
  {
    name: 'Competitive Prices',
    description:
      'We offer competitive prices without compromising on quality, making automation and electrical parts accessible to all.',
    icon: IoIosPricetag,
  },
]

export default function Whyus() {
  return (
    <div className="bg-white mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-500">Why choosing us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build your project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our experienced engineers handle all aspects of
              procurement, ensuring a seamless experience while delivering tailored
              solutions to meet your specific requirements.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Stats Area */}

     <Stats/>

    
   </div>
  )
}
