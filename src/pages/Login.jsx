import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  return (
    <div>
      <button 
        type="button" 
        className='bg-indigo-900 text-white uppercase font-bold text-lg rounded-md shadow hover:bg-indigo-800 block py-5 px-20 mx-auto my-24'
        onClick={() => navigate('/clients')}
      >Login</button>
    </div>
  )
}

export default Login
