import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation()
  const currentURL = location.pathname

  return (
    <div className='md:flex md:min-h-screen '>
      
      <div className='md:w-1/4 bg-gray-900 px-5 py-10'>
        <h2 className='text-5xl md:text-2xl lg:text-3xl font-black text-center text-indigo-300'>
          Clients Administrator
        </h2>
        <nav className='mt-10 '>
          <Link 
            to='/clients' 
            className={`${currentURL === '/clients' ? 'text-indigo-300' : 'text-white'}  text-2xl block mt-2 hover:text-indigo-200`}
          >Clients</Link>
          <Link 
            to='/clients/new' 
            className={`${currentURL === '/clients/new' ? 'text-indigo-300' : 'text-white'}  text-2xl block mt-2 hover:text-indigo-200`}
          >New Client</Link>
        </nav>
      </div>
      <div className='md:w-3/4 p-10 md:h-screen md:overflow-scroll'>
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
