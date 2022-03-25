import Product from "../../models/product/Product";

// import productsList from  "../../assets/mocks/products.json";

const API_PRODUCT = '/api/products';

export const getProducts = async (): Promise<unknown> => {
    try {
        let response = await fetch(API_PRODUCT);
        const data = await response.json();       
        let productList : Product[] = []

        for ( const product of data ) {
            productList = [ ... productList, product]
        } 
        return productList
        
    } catch {
        throw new Error(" un erreur 000 .... ")
    }
}