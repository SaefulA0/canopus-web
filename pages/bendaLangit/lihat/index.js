import Layout from "../../../components/layout";
import CardHalUnik from "../../../components/cards/cardHalUnik";
import CardKonten from "../../../components/cards/cardKonten";
import Image from "next/image";

export default function lihatBenda({ data }) {
  return (
    <Layout title="Lihat">
      <main>
        {/* Gambar benda langit */}
        <section className="h-screen flex justify-center items-center text-gray-600 body-font">
          <div className="-z-10 fixed">
            <Image
              src="/imgs/planet/Earth.png"
              alt="bg"
              width={1920}
              height={1080}
              priority
              className="w-full h-full bg-center bg-cover bg-no-repeat"
            />
          </div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow w-fit md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-4xl mb-2 font-bold text-gray-100">
                Bumi
              </h1>
              <p className="mb-8 leading-relaxed text-secondColor italic font-semibold">
                Planet Biru
              </p>
            </div>
          </div>
          <button className="absolute right-16 bottom-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-10 h-10 hover:fill-secondColor hover:stroke-secondColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
        </section>
        {/* Informasi kecil planet */}
        <section className="p-10 shadow-lg bg-mainColor flex justify-center items-center">
          <div className="flex text-gray-200">
            <div className="w-48 text-center">
              <h3 className="font-bold text-secondColor mb-1">
                Jarak Dari Matahari
              </h3>
              <p className="font-medium">11000 KM</p>
            </div>
            <div className="w-48 text-center">
              <h3 className="font-bold text-secondColor mb-1">Koordinat</h3>
              <p className="font-medium">11000 KM</p>
            </div>
            <div className="w-48 text-center ">
              <h3 className="font-bold text-secondColor mb-1">
                Jarak Dari Bulan
              </h3>
              <p className="font-medium">11000 KM</p>
            </div>
          </div>
        </section>
        {/* Informasi planet */}
        <div className="min-h-screen px-16 py-24 bg-contentBG bg-center bg-cover bg-no-repeat flex-col justify-center items-center text-gray-600 body-font">
          <div className=" min-h-screen px-10 py-10 w-full rounded-xl bg-mainColor text-textMainColor">
            <h2 className="text-4xl font-semibold underline mb-8">Bumi</h2>
            <div className="flex">
              {/* basis konten kiri */}
              <div className="basis-full whitespace-normal">
                {/* penjelasan umum */}
                <div className="mb-12">
                  <h3 className="text-xl font-medium mb-2">Apa itu Bumi?</h3>
                  <p className="indent-8 text-justify text-opacity-80 leading-relaxed">
                    Bumi (Jawi: ‏بومي‎‎, nama astronomi: Terra[1]) merupakan
                    planet ketiga daripada matahari. Ia merupakan rumah kepada
                    jutaan spesies,[2] termasuklah manusia, bumi juga merupakan
                    satu-satunya tempat di dalam semesta di mana kehidupan
                    diketahui wujud. Hasil kajian sains, planet ini telah
                    dibentuk kira-kira 4.54 bilion tahun yang lalu,[3][4][5][6].
                    Jarak purata Bumi dengan matahari adalah 149.6 juta
                    kilometer dari Matahari. Lapisan udara dan medan magnet yang
                    dipanggil magnetosfera yang melindung permukaan Bumi
                    daripada angin suria, sinaran ultra merbahaya, dan radiasi
                    dari angkasa lepas. Lapisan udara ini menyelitupi bumi
                    sehingga Bumi (Jawi: ‏بومي‎‎, nama astronomi: Terra[1])
                    merupakan planet ketiga daripada matahari. Ia merupakan
                    rumah kepada jutaan spesies,[2] termasuklah manusia, bumi
                    juga merupakan satu-satunya tempat di dalam semesta di mana
                    kehidupan diketahui wujud. Hasil kajian sains, planet ini
                    telah dibentuk kira-kira 4.54 bilion tahun yang
                    lalu,[3][4][5][6]. Jarak purata Bumi dengan matahari adalah
                    149.6 juta kilometer dari Matahari. Lapisan udara dan medan
                    magnet yang dipanggil magnetosfera yang melindung permukaan
                    Bumi daripada angin suria, sinaran ultra merbahaya, dan
                    radiasi dari angkasa lepas. Lapisan udara ini menyelitupi
                    bumi sehingga dengan matahari adalah 149.6 juta kilometer
                    dari Matahari. Lapisan udara dan medan magnet yang dipanggil
                    magnetosfera yang melindung permukaan Bumi daripada angin
                    suria, sinaran ultra merbahaya, dan radiasi dari angkasa
                    lepas. Lapisan udara ini menyelitupi bumi sehingga{" "}
                  </p>
                </div>
                {/* sejarah */}
                <div className="mb-20">
                  <h3 className="text-xl font-medium mb-2">Sejarah Bumi</h3>
                  <p className="indent-8 text-justify text-opacity-80 leading-relaxed">
                    Bumi tempat segenap makhluk hidup termasuk manusia telah
                    terbentuk kira-kira 4,600,000,000 tahun lalu bersamaan
                    dengan planet-planet lain yang membentuk sistem suria dengan
                    matahari sebagai pusatnya. Sejarah kehidupan di Bumi baru
                    dimulai sekitar 3,500,000,000 tahun lalu dengan munculnya
                    mikroorganisme sederhana iaitu bekteria dan alga. Kemudian
                    pada 1,000,000,000 tahun lalu baru muncul organisme bersel
                    banyak. Pada sekitar 540,000,000 tahun lalu secara bertahap
                    kehidupan yang lebih komplek mulai berevolusi. Perkembangan
                    tumbuhan pertama adalah pteridofita (tumbuhan paku),
                    Gimnosperma (tumbuhan berujung) dan terakhir angiosperma
                    (tumbuhan berbunga). Sedangkan perkembangan haiwan dimulai
                    dari invertebrata, ikan, amfibia, reptilia, burung dan
                    terakhir mamalia, kemudian terakhir kali muncul manusia.
                    Masa Arkaeozoik dan Proterozoikc bersama-sama dikenal
                    sebagai masa prakambriu
                  </p>
                </div>
              </div>
              {/* basis konten kanan */}
              <div className="basis-1/2 ml-10">
                <h3 className="text-xl font-semibold mb-4">
                  Video mengenai Bumi
                </h3>
                <div className="relative w-full aspect-video flex items-center justify-center">
                  {data.map((video) => {
                    return (
                      <iframe
                        key={video}
                        className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video}`}
                        allowFullScreen=""
                        data-gtm-yt-inspected-2340190_699="true"
                        id="240632615"
                      />
                    );
                  })}
                </div>
                <div className="flex justify-center mt-24">
                  <Image
                    className="w-72"
                    alt="hero"
                    width={512}
                    height={512}
                    priority
                    src="/imgs/astronout/astro4.png"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl font-semibold underline mb-8">
                Hal Unik Yang Pernah Terjadi Di Bumi
              </h2>
              <div className="flex gap-10 justify-center items-center">
                <CardHalUnik />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16 px-10 py-10 w-full rounded-xl shadow-lg bg-mainColor text-textMainColor">
            <h2 className="text-2xl text-center font-semibold underline mb-8">
              Planet Lainnya
            </h2>
            <div className="flex gap-10 justify-center mb-8">
              <CardKonten />
            </div>
            <button className="border-2 w-20">Next</button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  const APIkey = "AIzaSyA5Jyd-dCU1asIJnNSoH9vmtuK8E5TD08M";
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=JGXi_9A__Vc&key=${APIkey}`
  );
  const data = await response.json();
  const data2 = data.items;
  const data3 = data2.map((data2) => data2.id);
  return {
    props: {
      data: data3,
    },
  };
}
