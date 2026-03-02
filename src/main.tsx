import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Styles/index.scss'
import './Styles/theme.scss'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Project from './Pages/Project'
import ScrollToTop from './Hooks/ScrollToTop'
import { ThemeProvider } from './Context/ThemeContext'

// L'élément #root est garanti par index.html — assertion non-nulle justifiée
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
