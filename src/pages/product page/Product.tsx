import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from 'types/product'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import ProductCard from 'pages/products/ProductCard'
import products from 'products'
import Rating from './Rating'
import './product.css'

const Product = ({}: IProduct) => {
	const [quantity, setQuantity] = useState<number>(1)
	const { id } = useParams()

	const product = products.find((i) => i.id === Number(id))
	if (!product) return <></>

	const { name, image, price, rating, reviews } = product

	return (
		<div className='product-review'>
			<img src={image} alt='' />
			<div className='info'>
				<h1 className='name'>{name}</h1>
				<Rating rating={rating} reviews={reviews} />
				<h3 className='details'>Details: </h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum tellus sed tempor
					malesuada.
				</p>
				<h2 className='price'>${price}</h2>
				<div className='quantity'>
					<h3>Quantity:</h3>
					<div className='quantity-content'>
						<div
							className='minus'
							onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
							children={<AiOutlineMinus />}
						/>
						<div className='num'>{quantity}</div>
						<div
							className='plus'
							onClick={() => setQuantity((q) => q + 1)}
							children={<AiOutlinePlus />}
						/>
					</div>
				</div>
				<div className='buttons'>
					<button className='toCart'>Add to cart</button>
					<button className='buy'>Buy now</button>
				</div>
			</div>
		</div>
	)
}

export default Product
