import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
    return (
        <div>
           <Navigation />
           <Header />
           <Outlet />
           <Footer />
        </div>
    )
}
