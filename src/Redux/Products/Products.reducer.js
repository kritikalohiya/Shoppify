import React from 'react';

const initial = {
    setLoading: true,
    setError: '',
    setData: {}
}
const ProductsReducer = (state = initial, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            // return{
            //     axios
            //     .get(`${fetchURL}`)
            //     .then(res => {
            //         setLoading: !state.setLoading,
            //         setData: action.payload,
            //         setError: ''
            //     })
            // }
            return {
                ...state,
                setLoading: !state.setLoading,
                setData: action.payload,
                setError: ''
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                setLoading: false,
                setData: {},
                setError: 'SOMETHING WENT WRONG'
            }
        default:
            return state;
    }

}
export default ProductsReducer;
