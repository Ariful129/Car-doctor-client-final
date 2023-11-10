import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://car-doctor-server-final-cyan.vercel.app/addprodutcs')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = showAll ? products : products.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="mt-10 mb-4">
            <div className="text-center mb-6 space-y-3">
                <h3 className="text-2xl font-bold text-orange-600">Popular Products</h3>
                <h2 className="text-4xl font-semibold">Browse Our Products</h2>
                <p className="font-thin">
                    the majority have suffered alteration in some form,
                    <br />
                    by injected humour, or randomised words which do not look even slightly believable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product}></ProductCard>
                ))}
            </div>

            <div className="text-center mt-4">
                <button className="btn bg-black p-2 text-white" onClick={toggleShowAll}>
                    Show All
                </button>
            </div>
        </div>
    );
};

export default Products;
