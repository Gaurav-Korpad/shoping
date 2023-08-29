import React, { useState } from 'react'
import { AppBar, Box, Button, FormControl, FormLabel, IconButton, Modal, TextField, Toolbar, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [wide, setWide] = useState(false)
    const [data, setData] = useState({
        productimage:'',
        productname: '',
        productprice: '',
        quantity: 1
    });
    const navigate=useNavigate()
    const userData= JSON.parse(localStorage.getItem('user'))
    const [newdata, setNewdata] = useState(userData || []);
    const [error, setError] = useState(false);
    // const handleimage = (e) => {
    //     const file = e.target.files[0];
    //     // console.log(file);
    //     if (file && file.size <= 100 * 1024) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             const picture = e.target.result;
    //             setData((prev) => ({ ...prev, productimage: picture }))
    //             setError(false)
    //         };
    //         reader.readAsDataURL(file);
    //     } else {
    //         setError(true)
    //     }
    // };

    const handleimage = (event) => {
        const file = event.target.files[0];
        if (file && file.size <= 100 * 1024) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const baseImage = e.target.result;
                setData((prev) => ({ ...prev, productimage: baseImage }))
                setError(false)
            };
            reader.readAsDataURL(file);
        } else {
            setError(true)
        }
    };


    const handlename = (e) => {
        setData((prev) => ({ ...prev, productname: e.target.value }))
    }
    const handleprice = (e) => {
        setData((prev) => ({ ...prev, productprice: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuidv4()
        const productdata = { ...data, id }
        setNewdata([...newdata, productdata])
        localStorage.setItem('user', JSON.stringify([...newdata, productdata]))
        setData({
            productimage: '',
            productname: '',
            productprice: '',
            quantity: 1
        })
        setWide(false)
        navigate('/')
    }
    console.log(newdata);


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='primary'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Shop Mart
                        </Typography>
                        <Button color="inherit" onClick={() => setWide(true)}>+Buynow</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Modal open={wide}
                onClose={() => setWide(false)}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4

                }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ mb: 2 }} fullWidth>
                            <FormLabel >Add image </FormLabel>
                            <TextField type='file' accept="image/*" size='small'  name='productimage'  onChange={handleimage} />
                        </FormControl>
                        <FormControl sx={{ mb: 2 }} fullWidth >
                            <FormLabel >Product Name </FormLabel>
                            <TextField type='text' size='small' name='productname' value={data.productname} onChange={handlename} />
                        </FormControl>

                        <FormControl fullWidth>

                            <FormLabel>Product Price</FormLabel>
                            <TextField type='number' size='small' name='productprice' value={data.productprice} onChange={handleprice} />
                        </FormControl>
                        <div className='text-center mt-4'>
                            <Button sx={{backgroundColor:'blue',color:'white'}} type='submit' variant='contented' fullWidth>Add</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default Navbar