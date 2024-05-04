import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../AdminComponent/Admin/Admin'

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={false ? <CreateRestaurantForm/> : <Admin/>}>

                </Route>
            </Routes>
        </div>
    )
}

export default AdminRoute
