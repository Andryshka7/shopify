import products from 'products'
import ProductCard from './ProductCard'
import './products.css'

const Products = () => {
	return (
		<div className='products'>
			{products.map((product) => (
				<ProductCard {...product} key={'pk' + product.id} />
			))}
		</div>
	)
}

export default Products
