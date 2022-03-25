import Product from "../../models/product/Product";

import productsList from  "../../assets/mocks/products.json";

export const getProducts = (): unknown => {
    const data = productsList; // await fetch(apiProducts);
    let productList : unknown[] = []

    for ( const product of data ) {
        productList = [ ... productList, product]
    } 

    return productList
}