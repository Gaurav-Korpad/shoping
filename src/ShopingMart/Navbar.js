import { AppBar, FormControl, TextField, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import { Button, Modal, ModalHeader } from "reactstrap"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Navbar({ formData, setFormData, data, setData }) {


    const [modal, setModal] = useState(false)
    console.log(modal)

    const handleModalChange = () => {
        setModal(!modal)

    }
    // const [formData, setFormData] = useState({
    //     image: "" ,
    //     name : "" ,
    //     price : "" ,

    // });
    //  const [data, setData] = useState([]);

    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.name === "image") {
            setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0]}))
        }
        else {
            setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value}))
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])

    }
    console.log(data)



    return (
        <>
            <nav class="navbar navbar-light bg-success">
                <>
                    <a class="navbar-brand ">
                        <ShoppingCartCheckoutIcon />
                        Shoping Mart
                    </a>
                    <button class="btn btn-outline-success my-2 my-sm-0 text-warning bg-dark " type="submit" onClick={handleModalChange}>Buy Now</button>

                </>

            </nav>

            <Modal size='md' className='popup border border-primary ' isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader className='p-5'>

                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Add Image</label>
                            <input className='form-control' name='image'  type='file' onChange={handleChange} />
                            {formData.image && <img src={URL.createObjectURL(formData.image)} />}
                        </div>
                        <div className='form-group'>
                            <label>Product</label>
                            <input className='form-control' name='name' value={formData.name} type='text' onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Price</label>
                            <input className='form-control' name='price' value={formData.price} type='text' onChange={handleChange} />
                        </div>
                        <button type='submit'>Add Products</button>

                    </form>
                </ModalHeader>

            </Modal>
        </>
    )
}

export default Navbar
