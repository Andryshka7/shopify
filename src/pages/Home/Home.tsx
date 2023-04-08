import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ImageContainer from 'components/ImageContainer'
import Loader from 'components/Loader'
import About from 'pages/Home/About'

const Home = () => {
	const { loading, productList } = useAppSelector((store) => store.products)
	const ref = useRef<HTMLDivElement>(null)

	const scroll = (x: number) => {
		if (ref.current) ref.current.scrollLeft += x
	}

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-[30px] font-semibold my-3'>Welcome to Shopify Store</h1>
			<p className='text-xl'>Discover unique products from independent sellers all over the world</p>
			{loading ? (
				<Loader />
			) : (
				<div className='flex justify-center items-center w-10/12 h-fit'>
					<MdChevronLeft size={150} onClick={() => scroll(-216)} />
					<div className='flex scroll-smooth mt-[20px] overflow-y-hidden scrollbar-none' ref={ref}>
						{productList.map(({ price, title, image, id }) => (
							<NavLink to={`products/${id}`} key={'p1' + id}>
								<div className='flex flex-col text-center m-2 py-3 px-2 pt-5 w-[200px] h-[300px] border border-gray-300'>
									<ImageContainer width={150} height={150} image={image} />
									<p className='text-xl font-medium line-clamp-2 text-ellipsis my-auto'>
										{title}
									</p>
									<p className='text-xl font-bold'>${price}</p>
								</div>
							</NavLink>
						))}
					</div>
					<MdChevronRight size={150} onClick={() => scroll(216)} />
				</div>
			)}
			<NavLink to={'/products'}>
				<button className='bg-red-600 border-none mt-[20px] px-[24px] py-[12px] rounded-md text-white text-lg font-medium cursor-pointer transition duration-300 hover:bg-red-700 '>
					Show More
				</button>
			</NavLink>
			<About />
		</div>
	)
}

export default Home
