import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Services/NotificationService";
import productService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();



    async function send(product: ProductModel) {
        try {
            // convert the FileList from react-hook-form to File (for the backend)
            product.image = (product.image as FileList)[0]; // now image is of type File

            await productService.addProduct(product);
            notificationService.success("Product Added");
            // navigate back to products
            navigate("/products");

        } catch (error: any) {
            console.dir(error);
            notificationService.error(error);
        }
    }

    return (
        <div className="AddProduct Box">
            <form>
                <h2>Add Product</h2>

                <label>Name: </label>
                <input type="text"  {...register("name",
                    {
                        required: { value: true, message: "Missing name" },
                        minLength:{value:2, message:"Name too short"}
                        
                    }
                    )} />

                    <span>{formState.errors?.name?.message}</span>





                <label>Price: </label>
                <input type="number" {...register("price", 
                {
                    required: { value: true, message: "Missing price" },
                    min: { value: 0, message: "Price cannot be negative" },
                    max: { value: 1000, message: "Price cannot exeed 1000" }
                    
                }
                )} step="0.01" />
                <span>{formState.errors?.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock")} />

                {/* image leave for now */}
                <label>Image: </label>
                <input type="file" {...register("image")} />

                <button onClick={handleSubmit(send)}>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
