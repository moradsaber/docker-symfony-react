class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: Array<string>;
    categorieId: number;
    constructor(id: number, title: string, description: string, price: number, images: Array<string>, categorieId : number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
        this.categorieId = categorieId;
    }
}

export default Product;