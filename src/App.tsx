// Import Packages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import Styles
import './index.css'
import './App.css'

// Import Pages
import Home from './pages/Home';
import DynamicArticle from './content/DynamicArticle';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/blog/:slug" element={<DynamicArticle/>} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
