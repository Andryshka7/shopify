import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import Loader from 'components/Layout/Loader'
import Filters from './Filters'
import ImageContainer from 'components/ImageContainer'
import useFilteredProducts from 'hooks/useFilterProducts'

const Products = () => {
	const { loading } = useAppSelector((store) => store.products)
	const products = useFilteredProducts()

	return loading ? (
		<Loader />
	) : (
		<div className='flex w-10/12 justify-between my-0 mx-auto'>
			<Filters />
			<div className='w-full text-center transition linear duration-500'>
				{products.map(({ id, title, image, price }) => (
					<NavLink
						to={String(id)}
						className='w-[200px] h-fit inline-block m-5 mb-0 transition duration-200 hover:scale-[1.05]'
						key={`p${id}`}>
						<div>
							<ImageContainer width={200} height={200} image={image} />
							<div className='h-[70px] flex justify-between items-center'>
								<p className='font-medium mx-2.5 line-clamp-2 text-ellipsis'>
									{title}
								</p>
								<p className='font-bold text-xl mx-2.5'>${price}</p>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Products
