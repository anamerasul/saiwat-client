import Mynav from "@/components/Mynav/Mynav";
import Hero from "@/components/Hero/Hero";
import Whyus from "@/components/Whyus/Whyus";
import Categories from "@/components/Categories/Categories";
import Blogsection from "@/components/Blogsection/Blogsection";
import Partners from "@/components/Partners/Partners";
import Orderstatus from "@/components/Orderstatus/Orderstatus";
 

export default function Home() {
  return (
    
    <main className="bg-white">
      <div className="bg-white">
             <Hero/>
             <Partners/>
             <Whyus/>
             <Categories/>
             <Blogsection/>
        
             <Orderstatus/>

      </div>
    </main>
  );
}
