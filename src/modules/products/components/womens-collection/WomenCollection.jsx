import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getwomenProduct } from '../../../../redux/feature/WomenCollection.feature'


const WomenCollection = () => {

    let dispatch = useDispatch()
    let result2 = useSelector((state) => {
        return state['WomensCollection']
    })


    let { loading, WomensCollection, errorMessage } = result2

    useEffect(() => {
        dispatch(getwomenProduct())
    }, [dispatch])






    return (
        <>





            {/* <pre>{JSON.stringify(WomensCollection)}</pre> */}
            <h1 className='header-bg '>Womens Collection</h1>
            <div className='m-3'>
                <p className='fs-5 header_p'>Digital Bazar presents Womens Collection -Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem incidunt voluptates quos, quia, provident tenetur odit deserunt voluptatibus voluptate, magnam reprehenderit quasi! Distinctio voluptas iure repellendus explicabo nam modi nulla nesciunt eveniet, ea fugit rerum et molestiae vitae placeat voluptatibus soluta ducimus quisquam velit illo totam error esse est vel!</p>


            </div>
            {loading && <h2 className='fw-bold'>...Loading</h2>}
            {!loading && errorMessage && <h3 className='text-danger'>{errorMessage}</h3>}

            {!loading && WomensCollection.length > 0 &&
                <>
                    <div className='container '>
                        <div className='row  '>
                            <div className='cardAlgin'>
                                {
                                    WomensCollection.map((product) => {



                                        return (
                                            <>

                                                <div className='col-md-3'>
                                                    <div className='card  '>

                                                        <div className='card-header text-center'>
                                                            <img src={product.image} alt={product.name} />

                                                        </div>
                                                        <div className='card-body  text-center'>
                                                            <div className='cardBox'>
                                                                <p>{product.name}</p>
                                                                <p>{product.price}</p>

                                                                <button className='btn btn-outline-black' id='cardcolor'>Add to cart</button>

                                                            </div>


                                                        </div>




                                                    </div>
                                                </div>

                                            </>)
                                    })
                                }




                            </div>
                        </div>


                    </div>


                </>
            }



        </>
    );
}

export default WomenCollection;
