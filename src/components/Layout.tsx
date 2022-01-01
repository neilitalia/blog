import React from 'react'
import NavBar from './NavBar'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col text-amber-100 min-h-screen bg-gradient-to-b from-darkestBlue to-darkTeal">
      <NavBar />
      <Header/>
      <main className='w-3/4'>
        {children}
      </main>
    </div>
  )
}

export default Layout