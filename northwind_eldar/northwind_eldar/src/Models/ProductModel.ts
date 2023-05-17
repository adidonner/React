class ProductModel{

    // {"id":1,"name":"Chai","price":18,"stock":39,"imageName":"1.jpg"}

   public id: number;
   public name: string;
   public price: number;
   public stock:number;
   public imageName:string;

   public image: File | FileList;


}

export default ProductModel;