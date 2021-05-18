import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FullPageLoader from '../FullPageLoader/FullPageLoader';
import Product from './Product/Product';
import Pdata from './Pdata';
import {fetchingS , fetchingE} from '../../Redux/Products/Products.action'

const fetchURL = "https://609a4d0a0f5a13001721a8c6.mockapi.io/db";
const Products = () => {
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error , setError] =useState(null);
    const l = Loading ? <FullPageLoader /> : null
    // const e = error ? error : null

    // const getData = () =>
    //     fetch(`${fetchURL}`)
    //         .then((res) => res.json())
    // useEffect(() => {
    //     getData()
    //         .then((data) => setData(data))
    //         .then(()=>setLoading(false))
    // }, [])

    useEffect (()=>{
        axios
            .get(`${fetchURL}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setError(console.log('Something went wrong'))
            })
    },[])

    // useEffect (()=>{
    //     axios
    //         .get(`${fetchURL}`)
    //         .then(res => {
    //             fetchingS(res.data)
    //         })
    //         .catch(error => {
    //             fetchingE()
    //         })
    // },[])

    if (!data) {
        return <div>{l}</div>
    }


    return (
        <>
            <h1 className="productHeadline text-center">Product Listing</h1>
            {Loading ? <FullPageLoader /> : null}

            <div className="container-fluid mb-5">
                <div className="row mb-5">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                // Pdata.map(p => {
                                //     return <Product
                                //     key={p.id} {...p}
                                //     />
                                // })

                                data?.map((p) => {
                                    return <Product
                                        key={p.id} {...p}
                                    />
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
            {error ? error : null}
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return{
        fetchingS: i => dispatch(fetchingS(i)),
        fetchingE: () => dispatch(fetchingE)
    }
}
export default connect(null,mapDispatchToProps)(Products);
