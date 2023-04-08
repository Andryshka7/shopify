import { NavLink } from 'react-router-dom'
import ProductsPreview from './ProductsPreview'
import About from 'pages/Home/About'
import Conact from './Contact'

const Home = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-center text-4xl font-bold my-10 mb-4'>Welcome to Shopify Store</h1>
			<p className='text-xl mt-4'>
				Discover unique products from independent sellers all over the world
			</p>
			<ProductsPreview />
			<NavLink to={'/products'}>
				<button className='bg-blue-500 border-none mt-5 px-8 py-3 rounded-md text-white text-lg font-medium cursor-pointer transition duration-300 hover:bg-blue-700 '>
					Show More
				</button>
			</NavLink>
			<About />
			<Conact />
		</div>
	)
}

export default Home
