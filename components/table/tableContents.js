import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";

export default function TableContents({ dataContent, token }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "DELETE",
      url: `http://canopusapi.test/api/content/${dataContent.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ error }) => {
      if (error) {
        console.log("error");
      } else {
        console.log("Berhasil");
      }
    });
  };

  return (
    <>
      <div className="relative w-full h-5">
        <Link href="/dashboard/contents/createContents">
          <button className="px-4 py-1.5 h-fit text-white shadow-md rounded-full bg-[#FF9636] hover:bg-orange-500">
            Tambah Data +
          </button>
        </Link>
        <div className="flex absolute right-0"></div>
      </div>
      {/* Table */}
      <div className="mt-10 container">
        <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="text-center py-3 px-6 border-b-2">
                Id
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Title
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Intro
              </th>
              <th scope="col" className="py-3 px-6 border-b-2 text-center">
                History
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Category
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Coordinate
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Distance
              </th>
              <th className="py-3 px-6 border-b-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataContent.map((content) => {
              return (
                <tr key={content.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                  >
                    {content.id}
                  </th>
                  <td className="py-4 px-6">{content.title}</td>
                  <td className="py-4 px-6">{content.intro}</td>
                  <td className="py-4 px-6 text-center">
                    <p className="text-gray-600 mx-auto px-4 py-1 rounded-full w-fit">
                      {content.history}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-gray-600 px-4 py-1 rounded-full w-fit">
                      {content.category}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <p className="text-gray-600  px-4 py-1 rounded-full w-fit">
                      {content.coordinate}
                    </p>
                  </td>
                  <td className="py-4 px-3 text-center">
                    <p className="text-gray-600  px-4 py-1 rounded-full w-fit">
                      {content.distance}
                    </p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      href={`/dashboard/contents/editContent/${content.id}`}
                    >
                      <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#24a0ed] hover:bg-blue-500 text-white text-sm shadow-md">
                        Edit
                      </button>
                    </Link>
                    <Link
                      href={`/dashboard/contents/detailContents/${content.id}`}
                    >
                      <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#17a2b8] hover:bg-cyan-500 text-white text-sm shadow-md">
                        Detail
                      </button>
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#dc3545] hover:bg-red-500 text-white text-sm shadow-md"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
