import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img
            className='h-10 w-16' 
            src="https://cdn.pixabay.com/photo/2022/02/12/15/00/biryani-7009110_1280.jpg" 
            alt="" 
            />
            <div>
                <p>Biryani</p>
                <p>₹399</p>
            </div>
        </div>

        <div>
            <Button className='cursor-not-allowed'>completed</Button>
        </div>
    </Card>
  )
}

export default OrderCard
