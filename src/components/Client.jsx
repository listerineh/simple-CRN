import React from 'react'

function Client({ client }) {

  const {name, enterprise, email, phone, notes} = client

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
            className='bg-indigo-500 hover:bg-indigo-400 block w-full text-white p-2 uppercase font-bold text-xs' 
          >View</button>

          <button 
            type='button'
            className='bg-yellow-500 hover:bg-yellow-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2' 
          >Edit</button>

          <button 
            type='button'
            className='bg-red-500 hover:bg-red-400 block w-full text-white p-2 uppercase font-bold text-xs mt-2' 
          >Delete</button>
        </td>
    </tr>
  )
}

export default Client
