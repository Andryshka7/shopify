import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import Home from 'pages/home/Home'
import Products from 'pages/products/Products'
import Product from 'pages/product/Product'
import Conact from 'pages/contact/Contact'
import Cart from 'pages/cart/Cart'
import Error from 'components/error/Error'
import { useAppDispatch } from 'hooks/storehooks'
import { fetchProducts } from 'redux/products'

const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

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
					<Route path='contact' element={<Conact />} />
					<Route path='cart' element={<Cart />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
