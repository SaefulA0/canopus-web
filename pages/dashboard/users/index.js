import Layout from "../layouts/layout";
import TableUsers from "../../../components/table/tableUsers";

export default function index () {
    return(
        <Layout title = "Users">
            <h1 className="font-bold mx-10 my-10 text-lg">Table Users</h1>
            <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableUsers/>
          </div>
        </div>
        </Layout>
    );
}