import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import EditClient from './pages/EditClient'
import Home from './pages/Home'
import Login from './pages/Login'
import NewClient from './pages/NewClient'
import ViewClient from './pages/ViewClient'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/clients' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='new' element={<NewClient />} />
          <Route path='edit/:id' element={<EditClient />} />
          <Route path=':id' element={<ViewClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
