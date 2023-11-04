import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import "tailwindcss/tailwind.css";

function Index({ user, buku }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-14">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                RUA's STORE
                            </div>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink
                                href={route("buku")}
                                active={route().current("buku")}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href={route('buku.create')}
                                active={route().current('buku.create')}
                            >
                                Create
                            </NavLink>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden"></div>
                    </div>
                </div>

                <div>
                    <div className="pt-2 pb-3 space-y-1"></div>
                </div>
            </nav>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div class="container">
                                <h1 class="text-4xl text-gray-900 dark:text-white text-center mb-10">
                                    BUKU PERPUSTAKAAN
                                </h1>
                                <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                ID
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Judul Buku
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Penulis
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Harga
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Tanggal
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {buku.data.map((data_buku) => (
                                            <tr
                                                key={data_buku.id}
                                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <td class="px-6 py-4">
                                                    {data_buku.id}
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {data_buku.judul}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {data_buku.penulis}
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {data_buku.harga}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {data_buku.tanggal}
                                                </td>
                                                <td class="px-6 py-4">
                                                    <form
                                                        action="{{ route('buku.destroy', ['buku' => $data_buku->id]) }}"
                                                        method="POST"
                                                    >
                                                        <a
                                                            href="{{ route('buku.show', $data_buku->id) }}"
                                                            class="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded mr-2"
                                                        >
                                                            <i class="bi bi-eye"></i>{" "}
                                                            Show
                                                        </a>
                                                        <a
                                                            href="{{ route('buku.edit', $data_buku->id) }}"
                                                            class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                                                        >
                                                            <i class="bi bi-pencil-square"></i>{" "}
                                                            Edit
                                                        </a>
                                                        <button
                                                            type="submit"
                                                            class="text-red-500 hover:text-red-600 py-1 px-2 rounded"
                                                            onclick="return confirm('Apakah Anda yakin ingin menghapus item ini?')"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
