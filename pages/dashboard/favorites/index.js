import Layout from "../layouts/layout";
import TableFavorites from "../../../components/table/tableFavorites";

export default function index () {
    return(
        <Layout title = "Favorites">
        <h1 className="font-bold mx-10 my-10 text-lg">Table Favorites</h1>
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableFavorites/>
          </div>
        </div>
        </Layout>
    );
}