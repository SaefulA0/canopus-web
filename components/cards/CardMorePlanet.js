import Image from "next/image";


export default function CardMorePlanet() {
    return (
        <>
        <div className="flex flex-wrap justify-center gap-7">
                <div className="relative z-10 shadow-md cursor-pointer h-56 border-4 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/Earth.png"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Earth</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 h-56 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">599 Juta KM</p>
                        <Image
                        src="/imgs/planet/Jupiter.png"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Jupiter</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 w-96 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/Mars.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Mars</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 h-56 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/Mercury.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Mercury</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                        {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 w-96 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/neptune.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Neptune</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 h-2/3 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">1,2 Milyar KM</p>
                        <Image
                        src="/imgs/planet/Saturn2.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Saturn</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 h-1/2 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/Venus.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Venus</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
                <div className="relative z-10 shadow-md cursor-pointer border-4 w-96 border-white rounded-xl">
                        <p className="absolute top-4 right-14 font-normal text-sm text-opacity-40 text-white">Jarak:</p>
                        <p className="absolute top-9 right-5 font-normal text-sm text-opacity-40 text-white">Kamu disini</p>
                        <Image
                        src="/imgs/planet/uranus.jpg"
                        alt="bg"
                        width={512}
                        height={512}
                        priority
                        Layout="fill"
                        className="w-96 object-cover rounded-xl"
                        />
                        <p className="absolute bottom-5 left-5 font-medium text-white">Uranus</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-secondColor" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg>

                         {/* sebelum ditambah ke favorit */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute bottom-4 right-4 fill-white" viewBox="0 0 576 512">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                        </svg> */}
                </div>
      </div>
        </>    
    )
}