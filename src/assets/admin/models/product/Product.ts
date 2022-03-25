class Product {
    id: number;
    titre: string;
    description: string;
    price: number;
    images: Array<string>;
    categorieId: number;
    constructor(id: number, titre: string, description: string, price: number, images: Array<string>, categorieId : number) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.price = price;
        this.images = images;
        this.categorieId = categorieId;
    }
}

export default Product;