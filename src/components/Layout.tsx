import React from 'react'
import NavBar from './NavBar'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-amber-100 min-h-screen bg-gradient-to-b from-darkestBlue to-darkTeal pb-20 md:pb-40">
      <NavBar />
      <Header />
      <main className='w-3/4 md:w-1/2 md:flex md:flex-col md:items-center'>
        {children}
      </main>
    </div>
  )
}

export default Layout