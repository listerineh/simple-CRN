import { useState, useEffect } from 'react'
import Client from '../components/Client'
import Spinner from '../components/Spinner'

function Home() {

  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getClientsFromAPI = async () => {
      try {
        const URL = 'http://localhost:4000/clients'
        const response = await fetch(URL)
        const result = await response.json()

        setClients(result)

      } catch (error) {
        console.log('ERROR:', error)
      }
    }
    getClientsFromAPI()
    setLoading(false)
  }, [])

  return (
    loading ? <Spinner /> : 
    (
      <>
        <h1 className="font-black text-4xl text-indigo-900">Home</h1>
        <p className='mt-3 text-indigo-400 font-semibold'>Manage your clients!</p>

        <table className='w-full mt-5 table-auto shadow bg-white'>
          <thead className='bg-indigo-900 text-white'>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Enterprise</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            { clients.map(client => (
                <Client 
                  key={ client.id }
                  client={ client }
                />
            ))}
          </tbody>
        </table>
      
      </>
    )
  )
}

export default Home
