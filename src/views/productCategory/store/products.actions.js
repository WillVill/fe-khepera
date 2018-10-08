export const PRODUCT_SELECTED = 'PRODUCTS/PRODUCT_SELECTED';
export const PRODUCTS_FETCHED_SUCCESSFULLY = 'PRODUCTS/PRODUCTS_FETCHED_SUCCESSFULLY';

///////////////////
// Local Actions //
///////////////////

export const selectProduct = (product) => {
    return {
        type: 'PRODUCT_SELECTED',
        payload: product
    }
};


////////////////////
// Server Actions //
////////////////////

export const fetchProducts = (products) => {
    return {
        type: 'PRODUCTS_FETCHED_SUCCESSFULLY',
        payload: products
    }
};