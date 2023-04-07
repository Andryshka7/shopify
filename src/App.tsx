import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Home from 'pages/Home/Home'
import Products from 'pages/Products/Products'
import Product from 'pages/Product/Product'
import Conact from 'pages/Contact/Contact'
import Cart from 'pages/Cart/Cart'
import Error from 'components/Error'
import { useAppDispatch } from 'hooks/storehooks'
import { fetchProducts } from 'redux/products'

const App = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<div className='min-h-screen flex flex-col'>
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
