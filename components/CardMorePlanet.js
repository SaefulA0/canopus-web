import Image from "next/image";


export default function CardMorePlanet() {
    return (
        <>
        <div className="relative z-10 shadow-md cursor-pointer">
        <Image
          src="/imgs/astronout/astro1.png"
          alt="bg"
          width={512}
          height={512}
          priority
          Layout="fill"
          className="w-96 object-cover rounded-xl"
        />
        <p className="absolute bottom-5 left-5 font-medium">Solar Wind</p>
      </div>
        </>
            // <main className="grid grid-cols-3 gap-4">
            //     <section className="aspect-video bg-mainColor p-1 rounded-xl">
            //         <div>

            //         </div>
            //     </section>
            //     <section className="aspect-video bg-mainColor p-1 rounded-xl">
            //         <div>

            //         </div>
            //     </section>
            //     <section className="aspect-video bg-mainColor p-1 rounded-xl">
            //         <div>

            //         </div>
            //     </section>
            //     <section className="aspect-video bg-mainColor p-1 rounded-xl">
            //         <div>

            //         </div>
            //     </section>
            // </main>      
    )
}