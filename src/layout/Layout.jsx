import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className='md:flex md:min-h-screen '>
      
      <div className='md:w-1/4 bg-red-900 px-5 py-10'>
        <h2 className='text-5xl md:text-2xl lg:text-3xl font-black text-center text-white'>
          Clients Administrator
        </h2>
        <nav className='mt-10 '>
          <Link 
            to='/clients' 
            className={`${currentURL === '/clients' ? 'text-red-300' : 'text-white'}  text-2xl block mt-2 hover:text-red-200`}
          >Clients</Link>
          <Link 
            to='/clients/new' 
            className={`${currentURL === '/clients/new' ? 'text-red-300' : 'text-white'}  text-2xl block mt-2 hover:text-red-200`}
          >New Client</Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
