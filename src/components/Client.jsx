import React from 'react'
import { useNavigate } from 'react-router-dom'

function Client({ client }) {

  const navigate = useNavigate()
  const {name, enterprise, email, phone, notes, id} = client

  return (
    <tr className='border-b-2 hover:bg-gray-50'>
        <td className="p-3">{name}</td>
        <td className="p-3">
          <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
          <p><span className='text-gray-800 uppercase font-bold'>Phone: </span>{phone}</p>
        </td>
        <td className="p-3">{enterprise}</td>
        <td className="p-3">
          <button 
            type='button'
            className='rounded-md bg-indigo-500 hover:bg-indigo-400 block w-full text-white p-2 uppercase font-bold text-xs' 
            onClick={() => navigate(`/clients/${id}`) }
          >View</button>

          <button 
            type='button'
            className='rounded-md bg-yellow-500 hover:bg-yellow-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2' 
          >Edit</button>

          <button 
            type='button'
            className='rounded-md bg-red-500 hover:bg-red-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2' 
          >Delete</button>
        </td>
    </tr>
  )
}

export default Client
