import Image from "next/image";
import Link from "next/link";

export default function CarouselCard(){
    return(
        <>
        <div className="bg-mainColor relative justify-between flex w-11/12 h-auto py-9 px-20 shadow-md mx-auto border-2 border-gray-600 border-opacity-50 rounded-lg">
            <div className="basis-4/6">
                <p className="text-3xl mb-4 font-bold text-white">Tahu kah kamu?</p>
                <p className="text-xl mb-16 font-normal text-white">sekitar tiga perempat massa matahari terdiri 
                                                                    dari hidrogen, sedangkan sisanya didominasi helium. Sisa massa tersebut 
                                                                    (1,69%, setara dengan 5.629 kali massa Bumi) 
                                                                    terdiri dari elemen-elemen berat seperti oksigen, karbon, neon, dan besi.
                </p>
                <Link
                    href="/planet"
                    className="inline-flex text-white bg-secondColor border-0 py-1 px-12 focus:outline-none rounded-md text-lg">
                    Lihat
                </Link>

            </div>
            <Image
            src="/imgs/lainnya/sun.png"
            alt="bg"
            width={512}
            height={512}
            priority
            Layout="fill"
            className="w-60 rounded-xl"/>
        </div>
        </>
    )
}