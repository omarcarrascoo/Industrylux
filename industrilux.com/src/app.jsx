import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Index from './Pages'
import CategoryPage from './Pages/CategoryPage'
import Contacto from './Pages/Contacto'
import CountryPage from './Pages/countryPage'
import PropertyPage from './Pages/propertyPage'
import ProvincePage from './Pages/ProvincePage'
function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Header/>}>
              <Route index element={<Index/>}/>
              <Route path='/es/bienes-raices-indusrieales/contacto' element={<Contacto/>}/>
              <Route path="/es/bienes-raices-indusrieales/:country" element={<CountryPage/>}/>
              <Route path="/es/bienes-raices-indusrieales/:urlCountry/:urlProvince" element={<ProvincePage/>}/>
              <Route path="/es/bienes-raices-indusrieales/:urlCountry/:urlProvince/:category1" element={<CategoryPage/>}/>
              <Route path='es/bienes-raices-indusrieales/:urlCountry/:urlProvince/:category1/:category2/:urlES' element={<PropertyPage/>}/>
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



