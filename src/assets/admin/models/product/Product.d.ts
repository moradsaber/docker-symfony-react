declare class Product {
    id: number;
    titre: string;
    description: string;
    price: number;
    images: Array<string>;
    categorieId: number;
    constructor(id: number, titre: string, description: string, price: number, images: Array<string>, categorieId: number);
}
export default Product;
