import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ClientForm from '../components/ClientForm'

function EditClient() {

  const { id } = useParams()
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)

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
    setLoading(false)
  }, [])

    return (
      <>
        {client.name ? 
        (
          <>
            <h1 className="font-black text-4xl text-indigo-900">Edit Client</h1>
            <p className='mt-3 text-indigo-400 font-semibold'>{"Change any of the following fields to edit the client!"}</p>
            <ClientForm 
              client={ client }
              loading={ loading }
            />
          </>
        ) 
        : 
        (
          <>
            <h1 className="font-black text-4xl text-red-900">Error!</h1>
            <p className='mt-3 text-red-400 font-semibold'>The client that you search for doesn't exists, try another one!</p>
          </>
        )}
      </>
    )
  }

export default EditClient
