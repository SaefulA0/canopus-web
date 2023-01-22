import { signOut, useSession } from "next-auth/react";
import Router from "next/router"
import { useEffect } from "react";
import Head from "next/head";

export default function Session() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/login");
    }, [status]);

    return(
        <main>
            <h1>Session anda habis silahkan login kembali</h1>
            <button onClick={() => signOut()}>Login</button>
        </main>
    );
}