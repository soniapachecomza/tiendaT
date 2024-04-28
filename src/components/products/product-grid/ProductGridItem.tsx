"use client";

import { Product } from "@/interfaces";
import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
    products: Product[];
}
export const ProductGridItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(product.images[0]);

    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setDisplayImage(product.images[0]);
        }
    }, [product.images]);

    return (
        <div className="rounded-md overflow-hidden face-in">
            <Link href={`/product/${product.slug}`}>
                {displayImage && (
                    <Image
                        src={`/products/${displayImage}`}
                        alt={product.title}
                        className="w-full object-cover rounded"
                        width={500}
                        height={500}
                        priority
                        onMouseEnter={() => setDisplayImage(product.images[1])}
                        onMouseLeave={() => setDisplayImage(product.images[0])}
                    />
                )}
            </Link>

            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`} className="hover:text-blue-400">
                    {product.title}
                </Link>
                <span className="font-bold">${product.price}</span>
            </div>
        </div>
    );
};
