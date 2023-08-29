import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Cart from '../pages/Cart'



export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >
            <Route index element={<Cart/>}/>
        </Route>
    )
)