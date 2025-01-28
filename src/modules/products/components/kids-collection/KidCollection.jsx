import React, { useEffect, useState } from 'react';
import axios from 'axios'

const KidCollection = () => {
    

    let [KidsCollection, setKidsCollection] = useState([])


    let kidsCollectionfetched = async () => {

        try {
            let url = 'http://127.0.0.1:5000/api/create/kids-products'

            let response = await axios.get(url);

            setKidsCollection(response.data.product)
        } catch (error) {
            console.log("error is ", error)
        }
    }




    useEffect(() => {

        kidsCollectionfetched()

    }, [])






    return (
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
    );
}

export default KidCollection;
