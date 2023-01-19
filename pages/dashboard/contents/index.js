import Layout from "../layouts/layout";
import TableContents from "../../../components/table/tableContents";

export default function index () {
    return(
        <Layout title = "Contents">
            <h1 className="font-bold mx-10 my-10 text-lg">Table Contents</h1>
            <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableContents/>
          </div>
        </div>
        </Layout>
    );
}