import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewClient() {

  const { id } = useParams()
  const [client, setClient] = useState({})

  useEffect(() => { 
    const getClientFromAPI = async () => {
      try {
        const URL = `http://localhost:4000/clients/${id}`
        const response = await fetch(URL)
        const result = await response.json()

        setClient(result)

      } catch (error) {
        console.log('ERROR:', error)
      }
    }
    getClientFromAPI()
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">Client Information</h1>
      <p className='mt-3 text-indigo-400 font-semibold'>View all the client's information!</p>

      <p className="text-gray-700 text-2xl mt-10">
        <span className='uppercase font-bold'>Name: </span>
        {client.name}
      </p>

      <p className="text-gray-700 text-2xl mt-4">
        <span className='text-gray-600 uppercase font-bold'>Enterprise: </span>
        {client.enterprise}
      </p>

      <p className="text-gray-700 text-2xl mt-4">
        <span className='text-gray-600 uppercase font-bold'>Email: </span>
        {client.email}
      </p>

      {client.phone && (
        <p className="text-gray-700 text-2xl mt-4">
          <span className='text-gray-600 uppercase font-bold'>Phone: </span>
          {client.phone}
        </p>
      )}

      {client.notes && (
        <p className="text-gray-700 text-2xl mt-4">
          <span className='text-gray-600 uppercase font-bold'>Notes: </span>
          {client.notes}
        </p>
      )}
      
    </>
  )
}

export default ViewClient
