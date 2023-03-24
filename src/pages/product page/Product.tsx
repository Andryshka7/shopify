import { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from 'products'
import Rating from './Rating'
import './product.css'
import { useAppDispatch } from 'hooks/storehooks'
import { pushCartItems } from 'redux/cartSlice'
import QuantitySelector from '../../components/quantity selector/QuantitySelector'

const Product = () => {
	const dispatch = useAppDispatch()
	const [quantity, setQuantity] = useState<number>(1)
	const params = useParams()

	const product = products.find((i) => i.id === Number(params.id))
	if (!product) return <></>

	const { id, name, image, price, rating, reviews } = product
	const increaseQuantity = () => quantity > 1 && setQuantity(quantity + 1)
	const decreaseQuantity = () => setQuantity(quantity - 1)

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
				<h3 className='quantity-name'>Quantity: </h3>
				<QuantitySelector
					quantity={quantity}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
				<div className='buttons'>
					<button
						className='toCart'
						onClick={() => {
							dispatch(pushCartItems({ id, amount: quantity }))
						}}
					>
						Add to cart
					</button>
					<button className='buy'>Buy now</button>
				</div>
			</div>
		</div>
	)
}

export default Product
