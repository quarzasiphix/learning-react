import { createBrowserRouter, 
  Routes, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import { useState, useEffect } from 'react'
import BlogList from './pages/BlogList'
import HomePage from './pages/Home'
import Contact from './help/contact'
import Faq from './help/faq'
 
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'

import NotFound from './pages/NotFound'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="blogs" element={<BlogList title='blogs'/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
  )
)
const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App