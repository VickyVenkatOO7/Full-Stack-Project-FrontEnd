import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {
    const email = useSelector((state) => state.auth.user?.email || "");
    const fullName = useSelector((state) => state.auth.user?.fullName || "");
    const handleLogout = () => {

    }
    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center text-center'>
            <div className='fixed flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>{fullName}</h1>
                <p>Email: {email}</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>Logout</Button>
            </div>
        </div>
    )
}

export default UserProfile
