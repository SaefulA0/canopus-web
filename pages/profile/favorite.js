import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import CardContentFav from "../../components/cards/cardContentFav";
import { getSession } from "next-auth/react";
import CarouselContent from "../../components/carousels/carouselContent";

export default function Favorite({ dataContent }) {
  return (
    <Layout title="Favorite">
      <main>
        <section className="min-h-screen bg-planetBG bg-cover items-center justify-center">
          <div className="container w-full mx-auto pt-32 mb-16">
            <div className="flex flex-row">
              <div className="basis-1/3"></div>
              <div className="basis-full w-full">
                <h1 className="text-4xl pt-14 pb-10 text-center font-bold text-white ">
                  Kumpulan halaman favoritmu!
                </h1>
                {/* Search */}
                <form action="">
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        class="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
              <Image
                src="/imgs/astronout/astro7.png"
                alt="astro 7"
                width={300}
                height={300}
                priority
                className=""
              />
            </div>
          </div>
          {/* Section list */}
          <div>
            <div class="ml-4 px-20">
              <h1 class="text-3xl font-bold text-center text-white">
                Benda Langit Favoritmu
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
              {dataContent.map((dataContent) => (
                <CardContentFav
                  key={dataContent.id}
                  dataContent={dataContent}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req, res);
  const tokenAccess = session.user.token;
  const username = session.user.user.username;

  // mengambil token session
  const token = "EuHMmH4N9j6OWrhy7BTP5p7xiDhXuJpGI01eA97v";

  // mengambil data canopusAPI
  const resFavorite = await fetch(
    `http://canopusapi.test/api/favorite?username=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const favorite = await resFavorite.json();
  const dataFavorite = favorite.data;

  // mengambil data canopusAPI
  // const resContent = await fetch(`http://canopusapi.test/api/content`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const content = await resContent.json();
  // const dataContent = content.data;

  const resContent = await Promise.all(
    dataFavorite.map((idFav) =>
      fetch(`http://canopusapi.test/api/content/${idFav.content_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json())
    )
  );
  const dataContent = JSON.parse(JSON.stringify(resContent));

  return {
    props: {
      dataContent: dataContent,
    },
  };
}
