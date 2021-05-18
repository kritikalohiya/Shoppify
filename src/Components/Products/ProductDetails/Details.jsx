import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FullPageLoader from '../../FullPageLoader/FullPageLoader';
import Pdata from '../Pdata';
import Detail from './Detail';
import { useParams } from 'react-router-dom';

export default function Details() {

    const { id } = useParams();
    // console.log(typeof id)
    // console.log(window.location.pathname);
    const [Data, setData] = useState(null);
    const [Loading, setLoading] = useState(true);
    const l = Loading ? <FullPageLoader /> : null

    useEffect(() => {
        axios
            .get(`https://609a4d0a0f5a13001721a8c6.mockapi.io/db/${id}`)
            .then(response => {
                console.log(response)
                setData(response.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }, [id])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {Loading ? <FullPageLoader /> : null}
                        {
                            // Pdata.filter(prod => prod.id == id).map(p => {
                            //         return <Detail
                            //         key={p.id} {...p}
                            //         />
                            //     })

                            [Data].map((p, i) => {
                                return <Detail key={i} {...p} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
