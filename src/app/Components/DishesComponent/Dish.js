import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(
        <div className="menu">
            <img src={`${dish.img}.jpg`} alt="ph"/>
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>ADD TO CART</button>
        </div>
    )
}

export default Dish;