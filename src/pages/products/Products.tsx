import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IProduct } from 'types/product'
import products from 'products'
import filtersIcon from 'assets/filters-icon.png'
import Filters from './Filters/Filters'
import './products.css'

const ProductCard = ({ id, name, category, image, price, rating }: IProduct) => (
	<NavLink to={String(id)} className='product'>
		<div>
			<img src={image} alt={name} />
			<div className='info'>
				<p className='product-name'>{name}</p>
				<p className='product-price'>${price}</p>
			</div>
		</div>
	</NavLink>
)

const Products = () => {
	const [open, setOpen] = useState<boolean>(true)
	const switchOpen = () => setOpen((p) => !p)

	return (
		<div className='products-container'>
			<img src={filtersIcon} alt='' onClick={switchOpen} className='filters-icon' />
			{open && <Filters />}
			<div className='products'>
				{products.map((product) => (
					<ProductCard {...product} key={'pc' + product.id} />
				))}
			</div>
		</div>
	)
}

export default Products
