import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

export default function pengaturanProfile() {
  return (
    <Layout title="Halaman Pengaturan Profile">
      <main>
        {/* Bagian tentang canopus */}
        <section className="h-auto bg-mainColor py-28 px-10 justify-center">          
          <div className="flex flex-wrap justify-center">
            {/* side bar */}
            <div className="justify-center mr-12">
              <h1 className="font-bold text-xl text-gray-100 title-font underline">Pengaturan</h1>              
                <div className="">
                  <button className="py-1 rounded-lg w-24 ml-1 mt-5 block text-white hover:bg-opacity-90 hover:bg-[#FF9636] hover:shadow-lg">
                    Akun
                  </button>
                  <button className="py-1 rounded-lg w-24 ml-1 mt-1 block text-white hover:bg-opacity-90 hover:bg-[#FF9636] hover:shadow-lg">
                    Pasword
                  </button>
                </div>
                <Image
                      src="/imgs/astronout/astro1.png"
                      alt="profile 1"
                      width={300}
                      height={300}
                      priority
                      className="w-44 h-44 sm:mt-60"
                    />
            </div>
            {/* akhir side bar */}


            {/* konten pengaturan */}
            {/* bagian foto cover */}
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-300 h-5 w-5 absolute mr-12 mt-12 right-1">
                <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
                  <Image
                      src="/imgs/developer/dafa.png"
                      alt="profile 1"
                      width={300}
                      height={300}
                      priority
                      className="w-40 h-40 absolute mt-60 ml-14 rounded-full shadow-xl"
                    />                 
                    <Image
                      src="/imgs/backgroundProfile/bg-profile1.png"
                      alt="profile 1"
                      width={967}
                      height={242}
                      priority
                      className="w-auto h-60 mt-10 rounded-xl"
                    />
                    {/* akhir foto cover */}

              {/* bagian header informasi akun */}
              <div className="border-b">
                <div className="flex flex-wrap mt-5">    
                  <h1 className="font-bold text-xl pl-64 text-white">Nama Pengguna</h1>                
                    <div className="flex flex-wrap ml-80">                  
                      <button className="py-1 rounded-lg w-24 ml-1 block text-mainColor hover:bg-opacity-90 hover:text-white hover:bg-[#FF9636] hover:shadow-lg">
                        Batal
                      </button>
                      <button className="py-1 rounded-lg w-24 ml-1 block text-mainColor hover:bg-opacity-90 hover:text-white hover:bg-[#FF9636] hover:shadow-lg">
                        Simpan
                      </button>                            
                    </div> 
                </div>
                <h1 className="text-xs pl-64 pb-20 text-white">Bio pengguna</h1>
              </div>
              {/* akhir header informasi akun */}

              {/* isian informasi akun */}
              <div className="">
                <div className="mt-5 items-center"> 
                  {/* inputan username */}
                  <div className="flex flex-wrap justify-center">   
                    <h1 className="text-white text-xl mr-9">Username</h1>            
                      <label for="Username">
                        <input
                          name="username"
                          type="username"
                          id="username"                      
                          className="py-2 px-2 ml-1 w-96 rounded-lg bg-thirdColor shadow text-white border-grey"
                          />
                      </label> 
                  </div>

                  {/* inputan bio */}
                  <div className="flex flex-wrap justify-center mt-3">   
                    <h1 className="text-white text-xl mr-24">Bio</h1>            
                      <label for="Bio">
                        <input
                          name="bio"
                          type="bio"
                          id="bio"                      
                          className="py-2 px-2 ml-2 w-96 rounded-lg bg-thirdColor shadow text-white border-grey"
                          />
                      </label> 
                  </div>

                  {/* inputan email */}
                  <div className="flex flex-wrap justify-center mt-3">   
                    <h1 className="text-white text-xl mr-20">Email</h1>            
                      <label for="Email">
                        <input
                          name="email"
                          type="email"
                          id="email"                      
                          className="py-2 px-2 ml-1 w-96 rounded-lg bg-thirdColor shadow text-white border-grey"
                        />
                      </label> 
                  </div>                  
                </div>                
              </div>
              {/* akhir isian informasi akun */}
            </div>
            {/* akhir konten pengaturan */}
          </div>
        </section>
        {/* akhir bagian tentang canopus */}       
      </main>
    </Layout>
  );
}
