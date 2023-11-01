import React from 'react'
import ReactDOM from 'react-dom/client'
import HappyCakeApp from './HappyCakeApp.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HappyCakeApp/>
  </React.StrictMode>,
)
