import { useRef } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ImageContainer from 'components/image container/ImageContainer'
import './home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
	const { products } = useAppSelector((store) => store)
	const ref = useRef<HTMLDivElement>(null)

	const scroll = (x: number) => {
		if (ref.current) ref.current.scrollLeft += x
	}

	return (
		<div className='homepage'>
			<h1>Welcome to Shopify Store</h1>
			<p>Check out our latest products:</p>
			<div className='products-wrapper'>
				<MdChevronLeft size={150} onClick={() => scroll(-242)} />
				<div className='products-list' ref={ref}>
					{products.map(({ price, title, image, id }) => (
						<NavLink to={`products/${id}`}>
							<div className='product' key={'p1' + id}>
								<ImageContainer width={150} height={150} image={image} />
								<h2>{title}</h2>
								<p>${price}</p>
							</div>
						</NavLink>
					))}
				</div>
				<MdChevronRight size={150} onClick={() => scroll(242)} />
			</div>
		</div>
	)
}

export default Home
