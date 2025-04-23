import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MobileOnly from './components/MobileOnly.jsx'
import './styles/index.scss';
import App from './App.jsx'

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <MobileOnly>
      <App />
    </MobileOnly>
  // </StrictMode>,
)
