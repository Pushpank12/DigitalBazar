import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {getkidProduct} from "../../../../redux/feature/KidCollection.feature"

const KidCollection = () => {

    let dispatch= useDispatch()
    let result = useSelector((state)=>
    {
        return state['KidsCollection']
    })

    let {loading,KidsCollection,errorMessage}=result

    // console.log(result, 'kids collections')

    useEffect(()=>{
        dispatch(getkidProduct())
    },[dispatch])

   return (
        <>
        {loading && <h2 className='fw-bold'>...Loading</h2>}
        { !loading && errorMessage && <h3 className='text-danger'>{errorMessage}</h3>}
        {
            !loading && KidsCollection.length > 0 &&
            <>

            {/* <pre>{JSON.stringify(KidsCollection)}</pre> */}
            <h1 className='header-bg '>Kids-collections</h1>
            <div className='m-3'>
                <p className='fs-5 header_p'>Digital Bazar presents kids collections -Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem incidunt voluptates quos, quia, provident tenetur odit deserunt voluptatibus voluptate, magnam reprehenderit quasi! Distinctio voluptas iure repellendus explicabo nam modi nulla nesciunt eveniet, ea fugit rerum et molestiae vitae placeat voluptatibus soluta ducimus quisquam velit illo totam error esse est vel!</p>


            </div>



            <div className='container '>
                <div className='row  '>
                    <div className='cardAlgin'>
                        {
                            KidsCollection.map((product) => {

 

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

export default KidCollection;
