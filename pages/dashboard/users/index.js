import Layout from "../layouts/layout";
import TableUsers from "../../../components/table/tableUsers";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";


export default function index ({ dataUser }) {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/dashboard/login");
  }, [status]);
    return(
        <Layout title = "Users">
            <h1 className="font-bold mx-10 my-10 text-lg">Table Users</h1>
            <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableUsers dataUser={dataUser}/>
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
    `http://canopusapi.test/api/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataUser = await response.json();
  if (dataUser.message === "This action is unauthorized."){
    return{
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }
  return {
    props: {
      dataUser: dataUser.data,
    },
  };
}
