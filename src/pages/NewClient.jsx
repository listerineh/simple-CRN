import React from 'react'
import ClientForm from '../components/ClientForm'

function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-indigo-900">New Client</h1>
      <p className='mt-3 text-indigo-400 font-semibold'>Fill in all these fields to register a new customer!</p>
      <ClientForm />
    </>
  )
}

export default NewClient
