import React from 'react'
import Form from '../components/Form'

function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-red-900">New Client</h1>
      <p className='mt-3'>Fill this fields to register a new client!</p>
      <Form />
    </>
  )
}

export default NewClient
