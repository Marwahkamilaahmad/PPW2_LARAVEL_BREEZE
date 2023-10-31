import React from "react";
import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

function Create({ user }) {
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
                                href={route("buku.create")}
                                active={route().current("buku.create")}
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
                            {/* jersnjkbnjrnjhkr */}

                            <div class="container">
                                <h4 class="text-center text-3xl text-gray-900 dark:text-white">
                                    TAMBAH BUKU
                                </h4>

                                <form
                                    class="mx-10 mt-5"
                                    method="post"
                                    action="/buku"
                                >
                                    <div class="mb-6 mx-10">
                                        <label
                                            for="judul"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Judul
                                        </label>
                                        <input
                                            type="text"
                                            class="shadow-sm border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            id="judul"
                                            name="judul"
                                            placeholder="enter judul"
                                            required
                                        />
                                    </div>
                                    <div class="mb-6 mx-10">
                                        <label
                                            for="penulis"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Penulis
                                        </label>
                                        <input
                                            type="text"
                                            class="shadow-sm border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            id="penulis"
                                            name="penulis"
                                            placeholder="Enter penulis"
                                            required
                                        />
                                    </div>
                                    <div class="mb-6 mx-10">
                                        <label
                                            for="password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            harga
                                        </label>
                                        <input
                                            type="text"
                                            id="harga"
                                            name="harga"
                                            placeholder="Enter harga"
                                            class="shadow-sm border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            required
                                        />
                                    </div>
                                    <div class="mb-6 mx-10">
                                        <label
                                            for="repeat-password"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Tanggal
                                        </label>
                                        <input
                                            type="date"
                                            id="tanggal"
                                            name="tanggal"
                                            placeholder="Enter tanggal"
                                            class="shadow-sm  border border-red-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mx-10"
                                    >
                                        Simpan
                                    </button>
                                </form>

                                {/* <form
                                    method="post"
                                    action="{{ route('buku.store') }}"
                                >
                                    <div class="form-group row">
                                        <label
                                            for="judul"
                                            class="col-sm-2 col-form-label"
                                        >
                                            Judul
                                        </label>
                                        <div class="col-sm-10">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="judul"
                                                name="judul"
                                                placeholder="Enter judul"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="penulis"
                                            class="col-sm-2 col-form-label"
                                        >
                                            Penulis
                                        </label>
                                        <div class="col-sm-10">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="penulis"
                                                name="penulis"
                                                placeholder="Enter penulis"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="harga"
                                            class="col-sm-2 col-form-label"
                                        >
                                            Harga
                                        </label>
                                        <div class="col-sm-10">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="harga"
                                                name="harga"
                                                placeholder="Enter harga"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label
                                            for="tanggal"
                                            class="col-sm-2 col-form-label"
                                        >
                                            Tanggal
                                        </label>
                                        <div class="col-sm-10">
                                            <div
                                                class="input-group date"
                                                id="datetimepicker"
                                            >
                                                <input
                                                    type="date"
                                                    class="form-control"
                                                    id="tanggal"
                                                    name="tanggal"
                                                    placeholder="Enter tanggal"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Simpan
                                    </button>
                                </form> */}
                                {/* <div class="d-flex justify-content-end">
                                    <a
                                        href="/buku"
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Batal
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
