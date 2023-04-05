import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import FoodItem from "./FoodItem"

const Cart = () => {
    // const store = useSelector((store)=>store)
    // why we avoid above method and don't subscribe full store because whenever anything in the store changes---
    // our cart component is re rendered again and there is huge performance loss because pf multiple re renders 

    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    //this method is used instead in which we subscribe only---
    // to a specific portion of the store(like cartItems object of cart)
    return (
        <div className="p-5">
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100" onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((item)=><FoodItem key={item.id} {...item} />)} 
            </div>
        </div>
    )
}

export default Cart