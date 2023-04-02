import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import filtersIcon from 'assets/filters-icon.png'
import Filters from './Filters/Filters'
// import useFilteredProducts from 'hooks/useFilterProducts'
import ImageContainer from 'components/image container/ImageContainer'
import './products.css'
import { useAppDispatch, useAppSelector } from 'hooks/storehooks'

const Products = () => {
	const [open, setOpen] = useState<boolean>(true)
	const switchOpen = () => setOpen((p) => !p)
	// const products = useFilteredProducts()
	const { products } = useAppSelector((store) => store)

	return (
		<div className='products-container'>
			<img src={filtersIcon} alt='' onClick={switchOpen} className='filters-icon' />
			{open && <Filters />}
			<div className='products'>
				{products.map(({ id, title, image, price }) => (
					<NavLink to={String(id)} className='product' key={'p' + id}>
						<div>
							<ImageContainer width={200} height={200} image={image} />
							<div className='info'>
								<p className='product-name'>{title}</p>
								<p className='product-price'>${price}</p>
							</div>
						</div>
					</NavLink>
				))}
			</div>
		</div>
	)
}

export default Products
