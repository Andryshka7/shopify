import { NavLink } from 'react-router-dom'
import { IProduct } from 'types/product'

const ProductCard = ({ id, name, category, image, price, rating }: IProduct) => {
	return (
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
}

export default ProductCard