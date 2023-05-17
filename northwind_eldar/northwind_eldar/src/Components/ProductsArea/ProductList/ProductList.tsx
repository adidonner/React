import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Services/NotificationService";
import productService from "../../../Services/ProductsService";
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        // IIFE
        (async () => {
            productService.getAllProducts().then((arr) => {
                setProducts(arr);
            }, (error) => {
                notificationService.error(error);
            });


        })();


    }, []);

    return (
        <div className="ProductList" id="product-list-top">

            <NavLink to="new">➕</NavLink>

            {products.length === 0 && <Loading />}

            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}

export default ProductList;
