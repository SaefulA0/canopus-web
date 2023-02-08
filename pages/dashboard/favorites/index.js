import Layout from "../layouts/layout";
import TableFavorites from "../../../components/table/tableFavorites";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { Router } from "next/router";

export default function index ({ dataFav }) {
  const{data: session, status } = useSession();
    useEffect(() => {
    if (status === "unauthenticated") Router.replace("/dashboard/login");
  }, [status]);
    return(
        <Layout title = "Favorites">
        <h1 className="font-bold mx-10 my-10 text-lg">Table Favorites</h1>
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableFavorites dataFav={dataFav}/>
          </div>
        </div>
        </Layout>
    );
}
export async function getServerSideProps(req, res) {
  const session = await getSession(req, res);
  if (!session) {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: false,
      },
    };
  }
  const token = session.user.token;
  const response = await fetch (
    `http://canopusapi.test/api/favorite`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataFav = await response.json();
  if (dataFav.message === "This action is unauthorized."){
    return{
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }
  return {
    props: {
      dataFav: dataFav.data,
    },
  };
}