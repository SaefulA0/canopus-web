import Layout from "../../layouts/layout";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import Image from "next/image";

export default function detailContents({
  usernameID,
  token,
  id,
  dataContentDetail,
}) {
  const router = useRouter();

  return (
    <Layout title="Detail Contents">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* main */}
          <div className="w-full relative h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
            <h1 className="font-semibold text-lg mb-7">
              No. ID {dataContentDetail.id}
            </h1>
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">{dataContentDetail.title}</h2>
              <Image
                className="object-cover"
                src={`/imgs/planet/${dataContentDetail.mainpicture}`}
                alt="venus"
                priority={true}
                width={400}
                height={400}
              />
            </div>
            <div className="absolute top-32">
              <div className="flex mb-5">
                <div className="mr-32 basis-2/4">
                  <p className="text-base font-bold ml-5">Jarak :</p>
                  <p className="ml-7 font-medium text-lg">
                    {dataContentDetail.distance}
                  </p>
                </div>
                <div>
                  <p className="text-base font-bold ml-5">Koordinat :</p>
                  <p className="ml-7 font-medium text-lg">
                    {dataContentDetail.coordinate}
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-32">
                  <p className="text-base font-bold ml-5">Kategori :</p>
                  <p className="ml-7 font-medium text-lg">
                    {dataContentDetail.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mb-6">
                <p className="text-base font-bold ml-5 mb-2">Intro :</p>
                <p className="text-base font-semibold">
                  {dataContentDetail.intro}
                </p>
              </div>
              <div>
                <Image
                  className="object-cover items-center"
                  src={`/imgs/planet/${dataContentDetail.pictures}`}
                  alt="gif planet"
                  priority={true}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div>
              <p className="text-base font-bold ml-5 mb-2">History :</p>
              <p className="text-base font-semibold">
                {dataContentDetail.history}
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // memanggil token session
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const tokenAccess = session.user.token;
  const username = session.user.user.username;

  const { id } = context.params;

  const resContentDetail = await fetch(
    `http://canopusapi.test/api/content/${id}`,
    {
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    }
  );
  const contentDetail = await resContentDetail.json();
  const dataContentDetail = contentDetail.data;

  return {
    props: {
      dataContentDetail: dataContentDetail,
      id: id,
      usernameID: username,
      token: tokenAccess,
    },
  };
}
