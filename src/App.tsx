import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import Home from 'pages/home/Home'
import Products from 'pages/products/Products'
import Product from 'pages/product page/Product'
import About from 'pages/about/About'
import Conact from 'pages/contact/Contact'
import products from 'products'

const api = 'https://fakestoreapi.com/products'

const getShopItems = async () => {
	const response = await fetch(api)
	const data = await response.json()
	return data
}

const Test = () => {
	console.log(true)
	return <h1>asdfasdf</h1>
}

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='products'>
						<Route index element={<Products />}></Route>
						<Route path={`:id`} element={<Product />} />
					</Route>
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Conact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
