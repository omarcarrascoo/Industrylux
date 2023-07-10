
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Index from './Pages';
import CategoryPage from './Pages/CategoryPage';
import Contacto from './Pages/Contacto';
import CountryPage from './Pages/countryPage';
import PropertyPage from './Pages/propertyPage';
import ProvincePage from './Pages/ProvincePage';
import MailConfirmation from './Pages/MailConfirmation';

function App() {

  return (
    <Router>
      <Helmet>
        <title>funciona</title>
      </Helmet>
      {/* <Header /> */}
      <Routes>
      
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/" element={<Navigate to="/es"/> } />
        <Route  path="/:lan" element={<Index/>}/>
        <Route path="/:lan/contacto" element={<Contacto />} />
        <Route path="/:lan/:country" element={<CountryPage />} />
        <Route path="/:lan/:urlCountry/:urlProvince" element={<ProvincePage />} />
        <Route path="/:lan/:urlCountry/:urlProvince/:category1" element={<CategoryPage />} />
        <Route
          path="/:lan/:urlCountry/:urlProvince/:category1/:category2/:urlProperty"
          element={<PropertyPage />}
        />
        <Route  path="/:lan/mail" element={<MailConfirmation/>}/>
      </Routes>
    </Router>
  );
}

export default App;

