import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="/imgs/Favicon.png" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
