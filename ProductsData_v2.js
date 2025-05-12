const CategoryProducts = {
    buzos: [
        { Nombre: "My hero Academia Hoddie", Talla: "M", Color: "Negro", Image: "images/my_hero_academia_hoodie.jpeg" },
        { Nombre: "Sasuke Hoddie", Talla: "M", Color: "Negro", Image: "images/sasuke_hoodie.jpeg" },
        { Nombre: "Kaneki Hoddie", Talla: "M", Color: "Negro", Image: "images/kaneki_hoodie.jpeg" },
        { Nombre: "Waifu Hoddie", Talla: "M", Color: "Negro", Image: "images/waifu_hoodie.jpeg" }
    ],
    tops: [
        { Nombre: "Top One", Talla: "M", Color: "Negro", Image: "images/sample1.jpeg" },
        { Nombre: "Top Two", Talla: "M", Color: "Cafe", Image: "images/sample2.jpeg" }
    ],
    bottoms: [
        { Nombre: "Cargo One", Talla: "M", Color: "Negro", Image: "images/cargo_one.jpeg" },
        { Nombre: "Cargo Two", Talla: "M", Color: "Negro", Image: "images/cargo_two.jpeg" },
        { Nombre: "Skirt", Talla: "S", Color: "Negro", Image: "images/skirt.jpeg.png" }
    ]
};

function GetCategoryProducts(category){
    return CategoryProducts[category] || [];
}
