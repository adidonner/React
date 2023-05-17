import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Services/NotificationService";
import productService from "../../../Services/ProductsService";
import appConfig from "../../../Utils/Config";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const prodId = +params.prodId;

    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    async function deleteProduct() {


        if (window.confirm("Are you sure?")) {
            try {
                await productService.deleteProduct(prodId);
                notificationService.success("Product deleted");
                navigate("/products");
            } catch (error: any) {
                notificationService.error(error);
            }
        }
    }

    useEffect(() => {
        productService
            .getOneProduct(prodId)
            .then((p) => setProduct(p))
            .catch((e) => notificationService.error(e));
    }, []);



    return (
        <div className="ProductDetails">
            {product && (
                <>
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price}</h3>
                    <h3>Stock: {product.stock}</h3>
                    <img src={appConfig.productsImagesUrl + product.imageName} />

                    <br /><br />
                    <NavLink to="/products">Back to Products</NavLink>
                    <span> | </span>
                    <NavLink to="" onClick={deleteProduct}>Delete</NavLink>
                    <span> | </span>
                    <NavLink to={"/products/edit/" + prodId} >Edit</NavLink>
                </>
            )}
        </div>
    );
}

export default ProductDetails;
