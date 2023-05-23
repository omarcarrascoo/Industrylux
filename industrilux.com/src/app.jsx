import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Index from './Pages'
import Contacto from './Pages/Contacto'
import CountryPage from './Pages/countryPage'
import PropertyPage from './Pages/propertyPage'

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header/>}>
              <Route index element={<Index/>}/>
              <Route path='/es/bienes-raices-indusrieales/contacto' element={<Contacto/>}/>
              <Route path="/es/bienes-raices-indusrieales/:country" element={<CountryPage/>}/>
              <Route path='es/bienes-raices-indusrieales/:urlCountry/:urlProvince/:urlCity/:categoria/:urlES' element={<PropertyPage/>}/>
            </Route>
            // <Route path="/contact" element={<Contact/>}/>
        )
    )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
