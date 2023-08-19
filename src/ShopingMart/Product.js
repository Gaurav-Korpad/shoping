import React from 'react'

function Product({ data }) {
    console.log(data)
    return (
        <>
            <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {data.map((product) => {
                                return <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        {product.image && <img className="object-cover object-center w-full h-full block" alt="ecommerce" src={URL.createObjectURL(product.image)} />}
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.name}</h3>
                                        <p className="mt-1">{product.price}</p>
                                    </div>
                                    <button>Add To Bag</button>
                                </div>

                            })}

                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Product
