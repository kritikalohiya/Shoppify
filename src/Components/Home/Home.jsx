import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Product from '../Products/Product/Product'
import axios from 'axios';
import Pdata from '../Products/Pdata';
import FullPageLoader from '../FullPageLoader/FullPageLoader';


const Home = () => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [filteredProd, setFilteredProd] = useState([]);
    const [Loading, setLoading] = useState(true);
    const l = Loading ? <FullPageLoader /> : null

    const handleClick = () => {
        setFilteredProd(
            Data.filter(product => {
                return product.pname.toLowerCase().includes(search.toLowerCase())
            })
        )
    }
    useEffect(() => {
        axios
            .get(`https://609a4d0a0f5a13001721a8c6.mockapi.io/db`)
            .then(res => {
                setData(res.data)
                setLoading(false)
                console.log(res)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setError(console.log(error))
            })
    }, [])

    useEffect(() => {
        setFilteredProd(
            Data.filter(product => {
                return product.pname.toLowerCase().includes(search.toLowerCase())
            })
        )

    }, [search, Data])

    if (!Data) {
        return <div>{l}</div>
    }

    return (
        <>
            <div className="homeCSS container-fluid">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-10 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="tagline mx-auto my-5 text-center">
                            Find it, Love it, Buy it
                        </h1>

                        <input type="text"
                            placeholder="search..."
                            className="mb-4"
                            onChange={e => setSearch(e.target.value)}
                        />
                        {/* <button type="button" className="btn btn-primary" onClick={() => handleClick()}>SEARCH</button> */}

                        <h1 className="productHeadline text-center">Product Listing</h1>
                        {Loading ? <FullPageLoader /> : null}
                        <div className="container-fluid mb-5 bg-light">
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row gy-4">
                                        {
                                            // Pdata.map(p => {
                                            //     return <Product
                                            //     key={p.id} {...p}
                                            //     />
                                            // })
                                            filteredProd.map((p, i) => {
                                                return <Product key={i} {...p} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Products /> */}
        </>


    );
}

export default Home;
