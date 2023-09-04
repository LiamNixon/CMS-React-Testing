// Import Packages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import Styles
import './index.css'
import './App.css'

// Import Pages
import Home from './pages/Home';
import Article from './content/Article';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/blog/:slug" element={<Article />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
