import Head from "next/head";
import SideNavbar from "../../../components/sidebar.js";
import Router from "next/router";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <div className="flex">
          <div className="basis-auto md:border-r-2">
            <SideNavbar />
          </div>
          <div className="basis-full">{props.children}</div>
        </div>
      </main>
    </>
  );
}
