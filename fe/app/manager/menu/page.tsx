"use client"

import { useEffect, useState } from "react";
import { IMenu } from "@/app/types";
import { getCookies } from "../../../lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_MENU } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from "next/image";
import Search from "./search";

const MenuPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined }}) => {
    const [menu, setMenu] = useState<IMenu[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const TOKEN = await getCookies("token");
                const search = searchParams.search ? searchParams.search.toString() : "";
                const url = `${BASE_API_URL}/menu?search=${search}`;
                const { data } = await get(url, TOKEN);
                if (data?.status) {
                    setMenu(data.data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, [searchParams]);

    const category = (cat: string): React.ReactNode => {
        if (cat === "TANK") {
            return (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    Tank
                </span>
            );
        }
        if (cat === "Jet") {
            return (
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                    Jet
                </span>
            );
        }
        return (
            <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                Drink
            </span>
        );
    };


    return (
        <div>
            <div className="m-2 bg-white rounded-lg p-3 border-t-4 border-t-primary shadow-md">
                <h4 className="text-xl font-bold mb-2 text-gray-500">Menu Data</h4>
                <p className="text-sm text-secondary mb-4 text-black">
                    This page displays menu data, allowing menus to view details, search, and manage menu items by adding, editing, or deleting them.
                </p>
                <div className="flex justify-between items-center mb-4">
                    {/* Search Bar */}
                    <div className="flex items-center w-full max-w-md flex-grow">
                        <Search url={`/manager/menu`} search={Array.isArray(searchParams.search) ? searchParams.search.join(',') : searchParams.search} />
                    </div>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : menu.length === 0 ? (
                    <AlertInfo title="informasi">No data Available</AlertInfo>
                ) : (
                    <div className="m-2">
                        {menu.map((data, index) => (
                            <div key={`keyPrestasi${index}`} className={`flex flex-wrap shadow m-2`}>
                                <div className="w-full md:w-1/12 p-2">
                                    <small className="text-sm font-bold text-primary">Picture</small>
                                    <br />
                                    <Image width={40} height={40} src={`${BASE_IMAGE_MENU}/${data.picture}`} className="rounded-sm overflow-hidden" alt="preview" unoptimized />
                                </div>
                                <div className="w-full md:w-2/12 p-2">
                                    <small className="text-sm font-bold text-primary">Name</small> <br />
                                    {data.name}
                                </div>
                                <div className="w-full md:w-1/12 p-2">
                                    <small className="text-sm font-bold text-primary">Price</small> <br />
                                    {data.price}
                                </div>
                                <div className="w-full md:w-5/12 p-2">
                                    <small className="text-sm font-bold text-primary">Description</small> <br />
                                    {data.description}
                                </div>
                                <div className="w-full md:w-1/12 p-2">
                                    <small className="text-sm font-bold text-primary">Category</small> <br />
                                    {category(data.category)}
                                </div>
                                <div className="w-full md:w-2/12 p-2">
                                    <small className="text-sm font-bold text-primary">Action</small>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
