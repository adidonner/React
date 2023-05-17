import "./Routing.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import About from "../../AboutArea/About/About";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                {/* Home */}
                <Route path="/home" element={<Home />} />
                {/* Producs */}
                <Route path="/products" element={<ProductList/>} />
                {/* About */}
                <Route path="/about" element={<About/>} />
                {/* default rout */}
                <Route path="/" element={<Navigate to={"/home"}/>} />
                {/* page not found */}
                <Route path="*" element={<PageNotFound/>} />
                {/* product details */}
                <Route path="/products/details/:prodId" element={<ProductDetails/>} />
                
                {/* add product */}
                <Route path="/products/new" element={<AddProduct/>} />

                {/* edit product */}
                <Route path="/products/edit/:prodId" element={<EditProduct/>} />
            </Routes>
        </div>
    );
}

export default Routing;
