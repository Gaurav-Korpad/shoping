import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()
  const storedata = JSON.parse(localStorage.getItem('user')) || []
  const bag = JSON.parse(localStorage.getItem('cart')) || []
  const [total, setTotal] = useState(0);
  const handledecriment = (id) => {
    const updatedcount = storedata.map((item) => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('user', JSON.stringify(updatedcount))
    navigate('/')
  }
  const handleincriment = (id) => {
    const updatedcount = storedata.map((item) => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('user', JSON.stringify(updatedcount))
    navigate('/')
  }
  const handlebag = (id) => {
    const updatedbag = storedata.map((item) => {
      if (item.id === id) {
        return {
          ...item
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedbag))
    navigate('/')
  }
  useEffect(() => {
    const addTotal = bag?.reduce((accumulator, item) => {
      return accumulator + item.productprice * item.quantity
    }, 0)
    setTotal(addTotal)
  }, [bag]);
  const handleRemove = (id) => {
    const updatedbag = bag.filter((item)=>item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedbag))
    navigate('/')
  }
  return (
    <>
      <section>
        <div className="text-grey-600 body-font my-3">
          <div className="container mx-auto">
            <div className="row">
              {storedata.map((item) => {
                return <div className="col-md-3">
                  <div className="card text-center">
                    <img src={item.productimage} className="img-responsive" />
                    <div className="card-body">
                      <div>
                        <h3>{item.productname}</h3>

                        <h5>${item.productprice}</h5>
                      </div>
                      <div className='d-flex text-center counter'>
                        <button className='btn btn-outline-secondary' onClick={() => handledecriment(item.id)}>-</button>
                        <h2>{item.quantity}</h2>
                        <button className='btn btn-outline-secondary' onClick={() => handleincriment(item.id)}>+</button>
                      </div>
                      <div className='text-center mt-4'>
                        <button className='btn btn-primary' type="submit" onClick={() => handlebag(item.id)}>Add To Bag</button>
                      </div>
                    </div>
                  </div>
                </div>
              })}

            </div>
          </div>
        </div>  
      </section>

      <section className='container'>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">quantity</th>
              <th scope="col">Price Details</th>
              <th scope="col">Order Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {bag?.map((item) => {
            return <tbody>
              <tr>
                <th scope="row">{item.productname}</th>
                <td>{item.quantity}</td>
                <td>${item.productprice}</td>
                <td>${item.productprice * item.quantity}</td>
                <td className='text-center'><button onClick={() => handleRemove(item.id)} className='text-danger'>X</button></td>
              </tr>
            </tbody>
          })}
          <tbody>
            <tr>
              <th scope='row' colSpan='3' className='flot-right'>
                Total
              </th>
              <td>
                ${total}
              </td>
              <td>

              </td>
            </tr>

          </tbody>
        </table>
      </section>
    </>
  )
}

export default Cart