import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import App from './App.jsx'
import awsExports from './aws-exports'

import './styles/index.css'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsExports)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
