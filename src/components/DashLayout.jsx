import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

const DashLayout = () => {
    return (
        <>
            <Dashboard/>
            <div className='content'>
                <Outlet/>
            </div>
        </>
    )
}

export default DashLayout