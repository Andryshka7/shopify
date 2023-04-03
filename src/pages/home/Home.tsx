import { useRef } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ImageContainer from 'components/image container/ImageContainer'
import Loader from 'components/loader/Loader'
import { NavLink } from 'react-router-dom'
import './home.css'
import About from 'pages/home/about/About'

const Home = () => {
	const { loading, productList } = useAppSelector((store) => store.products)
	const ref = useRef<HTMLDivElement>(null)

	const scroll = (x: number) => {
		if (ref.current) ref.current.scrollLeft += x
	}

	return (
		<div className='homepage'>
			<h1>Welcome to Shopify Store</h1>
			<p>Discover unique products from independent sellers all over the world</p>
			{loading ? (
				<Loader />
			) : (
				<div className='products-wrapper'>
					<MdChevronLeft size={150} onClick={() => scroll(-242)} />
					<div className='products-list' ref={ref}>
						{productList.map(({ price, title, image, id }) => (
							<NavLink to={`products/${id}`} key={'p1' + id}>
								<div className='product'>
									<ImageContainer width={150} height={150} image={image} />
									<h2>{title}</h2>
									<p>${price}</p>
								</div>
							</NavLink>
						))}
					</div>
					<MdChevronRight size={150} onClick={() => scroll(242)} />
				</div>
			)}
			<NavLink to={'/products'}>
				<button className='buy-now'>Show More</button>
			</NavLink>
			<About />
		</div>
	)
}

export default Home
