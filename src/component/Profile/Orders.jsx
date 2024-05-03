import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../State/Order/Action';

const Orders = () => {
  const { auth, cart, order } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect (() => {
    dispatch(getUsersOrders(jwt))
  }, [auth.jwt])

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
        {
          order.orders.map((order)=>order.items.map((item) => <OrderCard order = {order} item = {item}/>))
        }
      </div>
    </div>
  )
}

export default Orders;
