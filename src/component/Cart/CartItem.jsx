import { Chip, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';

const CartItem = ({ item }) => {
    const { auth, cart } = useSelector((store) => store);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")

    const handleUpdateCartItem = (value) => {
        //const { cartItemId, quantity } = item;
        //console.log("CartItem props:", item);
        console.log("cartItemId:", item.data);
        console.log("quantity:", item.quantity);
        // if (!cartItemId) {
        //     console.log("cartItemId is undefined");
        //     return;
        // }
        //console.log("cart item", cartItemId);
        //console.log("quantity", quantity);
        if (value === -1 && item.quantity === 1) {
            handleRemoveCartItem()
        }
        const data = { cartItemId: item.id, quantity: item.quantity + value };
        const reqData = { data, jwt }
        dispatch(updateCartItem(reqData));

    }
    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }))
    }

    const { cartItems } = useSelector((state) => state.cart);
    console.log("Updated cart items:", cartItems);

    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>

                <div>
                    <img className='w-[5rem] h-[5rem] object-cover'
                        src={item.food.images[0]}
                        alt=""
                    />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>{item.food.name}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {item.quantity}
                                </div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹{item.totalPrice}</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {item.ingredients.map((ingredient) => <Chip label={ingredient} />)}
            </div>
        </div>
    )
}

export default CartItem;
