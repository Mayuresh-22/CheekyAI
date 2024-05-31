import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'

const router = createBrowserRouter(
	createRoutesFromElements([
		<Route path='/' element={<App />}>
			<Route path='' element={<Home />} />
			<Route path='about' element={<AboutPage />}/>
		</Route>
	])
)


ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router} />
	</>
)
