import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia
            sx={{height:345}} 
            image='https://cdn.pixabay.com/photo/2021/02/04/12/47/food-5981232_1280.jpg'/>

            <CardContent>
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>

                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"AndhraPradesh"}</p>
                    <p className='text-sm text-blue-500'>April 18, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>April 19, 2024 12:00 AM</p>
                </div>

                {false && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>}
            </CardContent>
        </Card>
    </div>
  )
}

export default EventCard