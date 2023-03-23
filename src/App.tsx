import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import Home from 'pages/home/Home'
import Products from 'pages/products/Products'
import About from 'pages/about/About'
import Conact from 'pages/contact/Contact'

const api = 'https://fakestoreapi.com/products'
const getShopItems = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	const data = await response.json()
	return data
}

const App = () => {
	console.log(getShopItems())

	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='products' element={<Products />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Conact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
