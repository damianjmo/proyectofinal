const ProductsKey = 'cartProducts';

function loadProducts() {
    const stored = localStorage.getItem(ProductsKey);
    return stored ? JSON.parse(stored) : [];
}

function saveProducts(products) {
    localStorage.setItem(ProductsKey, JSON.stringify(products));
}

function Push(Nombre, Talla, Color, Image){
    let products = loadProducts();
    let Product = { Nombre : Nombre, Talla: Talla, Color: Color, Image: Image };
    products.push(Product);
    saveProducts(products);
}

function Remove(index){
    let products = loadProducts();
    if(index >= 0 && index < products.length){
        products.splice(index, 1);
        saveProducts(products);
    }
}

function Get(){
    return loadProducts();
}
