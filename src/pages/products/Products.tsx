import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import filtersIcon from 'assets/filters-icon.png'
import Filters from './Filters/Filters'
import useFilteredProducts from '../../hooks/UseFilterProducts'
import './products.css'

const Products = () => {
	const [open, setOpen] = useState<boolean>(true)
	const switchOpen = () => setOpen((p) => !p)
	const products = useFilteredProducts()

	return (
		<div className='products-container'>
			<img src={filtersIcon} alt='' onClick={switchOpen} className='filters-icon' />
			{open && <Filters />}
			<div className='products'>
				{products.map(({ id, name, image, price }) => (
					<NavLink to={String(id)} className='product' key={'p' + id}>
						<div>
							<img src={image} alt={name} />
							<div className='info'>
								<p className='product-name'>{name}</p>
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
