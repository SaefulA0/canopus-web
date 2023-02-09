import Layout from "../layouts/layout";
import TableContents from "../../../components/table/tableContents";
import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import { Router } from "next/router";
import axios from "axios";

export default function index({ dataContent, token }) {
  const { data: session, status } = useSession();
  // console.log(dataContent);
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/dashboard/login");
  }, [status]);
  return (
    <Layout title="Contents">
      <h1 className="font-bold mx-10 my-10 text-lg">Table Contents</h1>
      <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
        <div className="w-full min-h-screen">
          {/* tabel */}
          <TableContents dataContent={dataContent} token={token} />
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
  const response = await fetch(`http://canopusapi.test/api/content`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const dataContent = await response.json();
  if (dataContent.message === "This action is unauthorized.") {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }
  return {
    props: {
      dataContent: dataContent.data,
      token: token,
    },
  };
}
