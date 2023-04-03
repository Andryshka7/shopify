import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { pushCartItems } from 'redux/cart'
import Rating from './Rating'
import QuantitySelector from '../../components/quantity selector/QuantitySelector'
import ImageContainer from 'components/image container/ImageContainer'
import './product.css'

const Product = () => {
	const dispatch = useAppDispatch()
	const { productList } = useAppSelector((store) => store.products)
	const params = useParams()
	const [quantity, setQuantity] = useState<number>(1)

	const product = productList.find((i) => i.id === Number(params.id))
	if (!product) return <></>

	const { id, title, image, price, rating, description } = product
	const increaseQuantity = () => setQuantity(quantity + 1)
	const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1)

	return (
		<div className='product-review'>
			<ImageContainer width={300} height={300} image={image} />
			<div className='info'>
				<h1 className='name'>{title}</h1>
				<Rating rating={rating.rate} reviews={rating.count} />
				<h3 className='details'>Details: </h3>
				<p className='description'>{description}</p>
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
						onClick={() => dispatch(pushCartItems({ id, amount: quantity }))}
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
