import Layout from "./layouts/layout";
import { getSession, useSession } from "next-auth/react";



export default function index () {

const { data: status } = useSession();
    if (status === "authenticated"){
        return(
            <Layout title = "Dashboard">
                <h1>Halaman Utama</h1>
            </Layout>
        );
    }
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
}