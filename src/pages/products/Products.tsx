import { NavLink } from 'react-router-dom'
import { IProduct } from 'types/product'
import products from 'products'
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

const Products = () => (
	<div className='products'>
		{products.map((product) => (
			<ProductCard {...product} key={'pk' + product.id} />
		))}
	</div>
)

export default Products
