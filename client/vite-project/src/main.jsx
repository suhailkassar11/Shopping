import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import { AuthProvider } from './context/data/authContext.jsx'
import { CartProvider } from './context/data/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
    </Provider>
)
