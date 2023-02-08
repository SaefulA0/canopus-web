import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TableUsers({ dataUser }) {
  return (
    <>
      <div className="relative w-full h-5">
        <Link href="/dashboard/users/createUsers">
          <button className="px-4 py-1.5 h-fit text-white shadow-md rounded-full bg-[#FF9636] hover:bg-orange-500">
            Tambah Data +
          </button>
        </Link>
        <div className="flex absolute right-0">
        </div>
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
                Username
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                email
              </th>
              <th scope="col" className="py-3 px-6 border-b-2 text-center">
                Bio
              </th>

              <th className="py-3 px-6 border-b-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
              {dataUser.map((user) => {
                return (
                  <tr key={user.id}className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 text-center font-medium text-black whitespace-nowrap"
                  >
                    {user.id}
                  </th>
                  <td className="py-4 px-6">
                    {user.username}
                  </td>
                  <td className="py-4 px-6">
                    {user.email}
                  </td>
                  <td className="py-4 px-3 text-center">
                      <p className="text-black mx-auto px-4 py-1 rounded-full w-fit">
                      {user.bio}
                      </p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link href="/dashboard/users/editUsers">
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#24a0ed] hover:bg-blue-500 text-white text-sm shadow-md">
                        Edit
                      </button>
                    </Link>
                    <Link href="/dashboard/users/showUsers">
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#17a2b8] hover:bg-cyan-500 text-white text-sm shadow-md">
                        Detail
                      </button>
                    </Link>
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#dc3545] hover:bg-red-500 text-white text-sm shadow-md">
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

