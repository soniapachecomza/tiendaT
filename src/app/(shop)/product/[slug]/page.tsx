import { QuantitySelector, SizeSelector, ProductSlideshow, ProductMobileSlideshow} from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}
export default function product({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }
    return (
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
            {/*slideshow*/}
            <div className="col-span-1 md:col-span-2">
                
                {/*mobile slideshow*/}
                <ProductMobileSlideshow
                title={product.title} 
                images={product.images} 
                className="block md:hidden"
                />
                
                {/*desktop slideshow*/}
                <ProductSlideshow
                    title={product.title}
                    images={product.images}
                    className="hidden md:block"
                /> 
            </div>
            {/*details*/}
            <div className="col-span-1 px-5 bg-blue-100">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${product.price}</p>

                {/*selector de tamaño*/}
                <SizeSelector
                    selectedSize={product.sizes[0]}
                    availableSize={product.sizes} />
                {/*selector de cantidad*/}
                <QuantitySelector
                    quantity={2}
                />

                {/*boton*/}
                <button className="btn-primary my-5">
                    Agregar al carrito
                </button>

                {/*Descripción*/}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">
                    {product.description}
                </p>
            </div>
        </div>
    )
}