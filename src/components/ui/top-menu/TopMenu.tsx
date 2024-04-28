"use client";

import Link from "next/link"
import {IoSearchOutline, IoCartOutline} from 'react-icons/io5'
import { titleFont } from "@/config/font"
import { useUIStore } from "@/store";

export const TopMenu = () => {
  
    const openSideMenu = useUIStore( state => state.openSideMenu);
    return (
      <nav className="flex px-5 justify-between items-center w-full">
        {/*logo*/}
        <div>
            <Link href="/">
                <span className={`${titleFont.className} antialiased font-bold`}>Tienda T</span>
                <span> | Shop</span>
            </Link>
        </div>

        {/*center menu*/}
        <div className="hidden sm:block">
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-red-300" href="/category/men">Hombres</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-red-300" href="/category/women">Mujeres</Link>
            <Link className="m-2 p-2 rounded-md transition-all hover:bg-red-300" href="/category/kid">Niños</Link>
        </div>

        {/*busqueda, card, menu*/}
        <div className="flex items-center">
            <Link href="/search" className="mx-2">
                <IoSearchOutline className="w-5 h-5"/>
            </Link>

            <Link href="/cart" className="mx-2">
                <div className="relative">
                    <span className="absolute text-xs rounded-full px-1 -right-2 font-bold -top-2 bg-red-800 text-white">
                        3
                    </span>
                    <IoCartOutline className="w-5 h-5"/>                 </div>
            </Link>

            <button className="m-2 p-2 rounded-md transition-all hover:bg-slate-400" onClick={ openSideMenu }>
                Menú
            </button>

        </div>
      </nav>
    )
  
}
