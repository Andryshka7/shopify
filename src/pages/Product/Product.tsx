import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { pushCartItems } from 'redux/cart'
import Rating from './Rating'
import QuantitySelector from '../../components/QuantitySelector'
import ImageContainer from 'components/ImageContainer'

const Product = () => {
	const params = useParams()
	const dispatch = useAppDispatch()
	const { productList } = useAppSelector((store) => store.products)
	const [quantity, setQuantity] = useState<number>(1)

	const product = productList.find((i) => i.id === Number(params.id))
	if (!product) return <></>

	const { id, title, image, price, rating, description } = product

	return (
		<div className='flex justify-around items-center my-0 mx-auto w-8/12 max-w-[850px] min-w-[700px]'>
			<ImageContainer width={300} height={300} image={image} />
			<div className='w-1/2'>
				<p className='text-2xl font-bold mx-0 my-7 mb-1'>{title}</p>
				<Rating rating={rating.rate} reviews={rating.count} />
				<p className='mt-2 font-bold'>Details: </p>
				<p className='max-h-[150px] overflow-hidden'>{description}</p>
				<p className='my-2 mx-0 font-bold text-2xl text-red-700'>${price}</p>
				<p className='inline mr-2 text-xl text-gray-800 font-bold'>Quantity: </p>
				<QuantitySelector
					quantity={quantity}
					increaseQuantity={() => setQuantity(quantity + 1)}
					decreaseQuantity={() => quantity > 1 && setQuantity(quantity - 1)}
				/>
				<div className='w-full flex justify-between mt-3.5'>
					<button
						className='text-red-700 text-xl py-2 px-9 cursor-pointer border border-red-700'
						onClick={() => dispatch(pushCartItems({ id, amount: quantity }))}
					>
						Add to cart
					</button>
					<button className='text-xl py-2 px-9 cursor-pointer bg-red-700 text-white border-none mr-2.5'>
						Buy now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
