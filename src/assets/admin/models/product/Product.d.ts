declare class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: Array<string>;
    categorieId: number;
    constructor(id: number, title: string, description: string, price: number, images: Array<string>, categorieId: number);
}
export default Product;
