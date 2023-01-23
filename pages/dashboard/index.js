import Layout from "./layouts/layout";
import { getSession, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Router from "next/router";



export default function index () {
    const { status } = useSession();
    
    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/dashboard/login");
    }, [status]);

        return(
            <Layout title = "Dashboard">
                <h1>Halaman Utama</h1>
            </Layout>
        );
    }

