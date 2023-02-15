import { createBrowserRouter, 
  Routes, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import { useState, useEffect } from 'react'
import BlogList from './pages/BlogList'
import HomePage from './pages/Home'
import Contact from './layout/help/contact'
import Faq from './layout/help/faq'
 
import RootLayout from './layout/RootLayout'

//import Navbar from './Navbar'

import './index.css'
import HelpLayout from './layout/HelpLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="blogs" element={<BlogList title='nigga blogs'/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>

        <Route path="*" element={}/>
      </Route>
  )
)
const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App