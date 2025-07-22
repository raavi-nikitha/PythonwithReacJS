import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import MyForm from './components/MyForm.jsx'
import Footer from './components/Footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header />
    <MyForm />
    <Footer />
  </StrictMode>,
)
