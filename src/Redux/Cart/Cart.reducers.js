// import CartActionTypes from './Cart.types';

const initial = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
    shippingAmnt: 0
}

const CartReducer = (state = initial, action) => {
    let findProduct;
    let index;

    switch (action.type) {
        case 'ADD_TO_CART':
            const { product, Quantity } = action.payload;
            // console.log(typeof product.id);
            const check = state.products.find(p => p.id == product.id);
            if (check) {
                return state;
            } else {
                const Tprice = state.totalPrice + product.rate * Quantity;
                console.log(Tprice)
                const Tquantities = state.totalQuantities + Quantity;
                product.quantity = Quantity;
                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: Tprice,
                    totalQuantities: Tquantities
                }
            }
        case 'INC':
            findProduct = state.products.find(p => p.id == action.payload);
            index = state.products.findIndex(p => p.id == action.payload);
            findProduct.quantity = findProduct.quantity + 1;
            state.products[index] = findProduct;
            return {
                ...state,
                totalPrice: state.totalPrice + findProduct.rate,
                totalQuantities: state.totalQuantities + 1
            }
        case 'DEC':
            findProduct = state.products.find(p => p.id == action.payload);
            index = state.products.findIndex(p => p.id == action.payload);
            if (findProduct.quantity > 1) {
                findProduct.quantity = findProduct.quantity - 1;
                state.products[index] = findProduct;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findProduct.rate,
                    totalQuantities: state.totalQuantities - 1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findProduct = state.products.find(p => p.id == action.payload);
            const filtered = state.products.filter(p => p.id !== action.payload)
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findProduct.rate * findProduct.quantity,
                totalQuantities: state.totalQuantities - findProduct.quantity
            }
        case 'FREE_SHIPPING':
            return {
                ...state, shippingAmnt: 0
            }
        case 'FAST_SHIPPING':
            return {
                ...state, shippingAmnt: 20
            }

        default:
            return state;
    }
}

export default CartReducer;