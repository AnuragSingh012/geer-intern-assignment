import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Products from "@/components/Products"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="relative top-[140px]">

                <Hero />
            
                <main>
                    <section className="min-h-screen flex justify-center px-6 pt-28 pb-10">
                        <div className="w-full  max-w-5xl min-h-screen">
                            <Products/>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}