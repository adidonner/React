// general configuration for any environment
class Config {
    
}

// development environment
class DevelopmentConfig {
    public productsUrl = "http://localhost:3030/api/products/";
    public productsImagesUrl = "http://localhost:3030/api/products/images/";
}

// production environment
class ProductionConfig {
    public productsUrl = "http://northwind.com/api/products/";
    public productsImagesUrl = "http://northwind.com/api/products/images/";
}

const appConfig = process.env.NODE_ENV === "development"
? new DevelopmentConfig()
:   new ProductionConfig();

export default appConfig;
