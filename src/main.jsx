import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import {ColorSchemeProvider} from "./contexts/index.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ColorSchemeProvider>
            <App/>
        </ColorSchemeProvider>
    </StrictMode>,
)
