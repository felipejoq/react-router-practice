import React from 'react'
import ReactDOM from 'react-dom/client'
import HappyCakeApp from './HappyCakeApp.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HappyCakeApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
