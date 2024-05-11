import { AiOutlineLoading } from "react-icons/ai";


export default function Loadingcomp() {
  return (
    <section className="relative pt-48 pb-48 bg-white">
          <div className="flex mx-auto bg-white w-full justify-center items-center gap-4">
                 <AiOutlineLoading className="animate-spin text-4xl"/>
                 <span className="text-md font-semibold text-zinc-500">Processing ...</span>
          </div>
    </section>
  )
}
