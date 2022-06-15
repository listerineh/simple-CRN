import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert'
import Spinner from './Spinner'

function ClientForm({ client, loading }) {

  const navigate = useNavigate()

  const newClientSchema = Yup.object().shape({
    name:        Yup.string()
                    .required()
                    .min(4)
                    .max(40),
    enterprise:  Yup.string()
                    .required(),
    email:       Yup.string()
                    .required()
                    .email(),
    phone:       Yup.number()
                    .integer()
                    .positive(),
  })

  const handleSubmit = async (values) => {
    try {
      let response

      if( client.id ){
        const URL = `${import.meta.env.VITE_API_URL}/${client.id}`
        response = await fetch(URL, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          }
        })

        const result = await response.json()
        navigate('/clients')
      } else {
        const URL = import.meta.env.VITE_API_URL
        response = await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          }
        })
      }

      await response.json()
      navigate('/clients')

    } catch(error) {
      console.log('ERROR:', error);
    }
  }

  return (
    loading ? <Spinner /> :
    (
      <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className="text-indigo-700 font-extrabold text-3xl uppercase text-center">{client?.name ? 'Edit Client' : 'Add a Client'}</h1>
      
        <Formik
          initialValues={{
            name: client?.name ?? '',
            enterprise: client?.enterprise ?? '',
            email: client?.email ?? '',
            phone: client?.phone ?? '',
            notes: client?.notes ?? '',
          }}
          enableReinitialize={ true }
          onSubmit={ async (values, {resetForm}) => { 
            await handleSubmit(values)
            resetForm()
          }}
          validationSchema={ newClientSchema }
        >
          {({errors, touched}) => {
            
            return (
              <Form
                className='mt-10'
              >
                <div className='mb-4'>
                  <label
                    className='text-gray-800 font-semibold uppercase'
                    htmlFor='name'
                  >Name</label>
                  <Field 
                    id='name'
                    name='name'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50 rounded-md'
                    placeholder="Enter the client's name"
                  />
                </div>

                {errors.name && touched.name ? 
                  (
                    <Alert>{errors.name}</Alert>
                  )
                  : null
                }

                <div className='mb-4'>
                  <label
                    className='text-gray-800 font-semibold uppercase'
                    htmlFor='enterprise'
                  >Enterprise</label>
                  <Field 
                    id='enterprise'
                    name='enterprise'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50 rounded-md'
                    placeholder="Enter the client's enterprise name"
                  />
                </div>

                {errors.enterprise && touched.enterprise ? 
                  (
                    <Alert>{errors.enterprise}</Alert>
                  )
                  : null
                }

                <div className='mb-4'>
                  <label
                    className='text-gray-800 font-semibold uppercase'
                    htmlFor='email'
                  >Email</label>
                  <Field 
                    id='email'
                    name='email'
                    type='email'
                    className='mt-2 block w-full p-3 bg-gray-50 rounded-md'
                    placeholder="Enter the client's email"
                  />
                </div>

                {errors.email && touched.email ? 
                  (
                    <Alert>{errors.email}</Alert>
                  )
                  : null
                }

                <div className='mb-4'>
                  <label
                    className='text-gray-800 font-semibold uppercase'
                    htmlFor='phone'
                  >Phone</label>
                  <Field 
                    id='phone'
                    name='phone'
                    type='tel'
                    className='mt-2 block w-full p-3 bg-gray-50 rounded-md'
                    placeholder="Enter the client's phone"
                  />
                </div>

                {errors.phone && touched.phone ? 
                  (
                    <Alert>{errors.phone}</Alert>
                  )
                  : null
                }

                <div className='mb-4'>
                  <label
                    className='text-gray-800 font-semibold uppercase'
                    htmlFor='notes'
                  >Notes</label>
                  <Field 
                    as='textarea'
                    id='notes'
                    name='notes'
                    type='text'
                    className='mt-2 block w-full p-3 bg-gray-50 rounded-md h-40'
                    placeholder="Enter notes about the client"
                  />
                </div>

                <input
                  type='submit'
                  value={client?.name ? 'Edit Client' : 'Add Client'}
                  className='mt-5 w-full bg-indigo-900 p-3 text-white uppercase font-bold text-lg rounded-md hover:bg-indigo-800 cursor-pointer'
                />

              </Form>
          )}}
        </Formik>

      </div>
    )
  )
}

ClientForm.defaultProps = {
  client: {},
  loading: false,
}

export default ClientForm
