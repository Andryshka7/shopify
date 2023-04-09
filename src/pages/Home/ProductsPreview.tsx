import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import ImageContainer from 'components/ImageContainer'
import Loader from 'components/Layout/Loader'

const ProductsPreview = () => {
	const { loading, productList } = useAppSelector((store) => store.products)
	const ref = useRef<HTMLDivElement>(null)

	const scroll = (x: number) => {
		if (ref.current) ref.current.scrollLeft += x
	}

	return loading ? (
		<Loader />
	) : (
		<div className='flex justify-center items-center w-10/12 h-fit'>
			<MdChevronLeft size={150} onClick={() => scroll(-216)} />
			<div
				className='flex scroll-smooth mt-[20px] overflow-y-hidden scrollbar-none'
				ref={ref}>
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
	)
}

export default ProductsPreview
