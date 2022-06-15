import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './layout/Login'
import EditClient from './pages/EditClient'
import Home from './pages/Home'
import LoginForm from './pages/LoginForm'
import NewClient from './pages/NewClient'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} >
          <Route index element={<LoginForm />} />
        </Route>

        <Route path='/clients' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='new' element={<NewClient />} />
          <Route path='edit' element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
