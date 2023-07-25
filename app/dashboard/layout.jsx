import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar'
import Footer from '@/components/Footer/Footer'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <DashboardNavbar></DashboardNavbar>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default layout
