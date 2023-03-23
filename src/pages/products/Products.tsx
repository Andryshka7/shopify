import products from 'products'
import { IProduct } from 'types/product'
import './products.css'

const Product = ({ name, category, image, price, rating }: IProduct) => {
	return (
		<div className='product'>
			<img src={image} alt={name} />
			<div className='info'>
				<h4>{name}</h4>
				<h5>${price}</h5>
			</div>
		</div>
	)
}
const Products = () => {
	return (
		<div className='products'>
			{products.map((product) => (
				<Product {...product} />
			))}
		</div>
	)
}

export default Products
