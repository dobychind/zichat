import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'

const Root = () => {

  return (
    <React.StrictMode>
      <BrowserRouter basename='/zichat'>
        <h2 className='text-white p-2 py-4 text-center bg-green-900 bg-opacity-35 w-full text-3xl font-bold'>ZiChat</h2>
        <div className='flex flex-col min-h-full bg-white'>
          <App />
          <Navbar />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
