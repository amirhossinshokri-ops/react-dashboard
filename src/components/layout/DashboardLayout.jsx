import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router'
function DashboardLayout() {
  return (
    <>
    
    <div className='min-h-screen lg:flex'>

<Sidebar/>
<main className='min-w-0 flex-1'>

<Topbar/>

<Outlet/>

</main>


    </div>
    
    </>
  )
}

export default DashboardLayout