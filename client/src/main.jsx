import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Pages/index.jsx'
import CountryPage from './Pages/countryPage'
import App from './app.jsx';
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
