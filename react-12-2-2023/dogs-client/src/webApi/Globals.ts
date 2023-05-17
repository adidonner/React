class Globals {}

class DevelopmentGlobals extends Globals {
  public urls = {
    dogs: "http://localhost:8080/dogs/v1/",
  };
}

class ProductionGlobals extends Globals {
  public urls = {
    dogs: "dogs/v1/",
  };
}

const globals =
  process.env.NODE_ENV === "production"
    ? new ProductionGlobals()
    : new DevelopmentGlobals();

export default globals;
