import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { pushCartItems } from 'redux/cart'
import Rating from './Rating'
import QuantitySelector from '../../components/QuantitySelector'
import ImageContainer from 'components/ImageContainer'
import Error from 'components/Layout/Error'

const Product = () => {
	const params = useParams()
	const dispatch = useAppDispatch()
	const { productList } = useAppSelector((store) => store.products)
	const [quantity, setQuantity] = useState<number>(1)

	const product = productList.find((i) => i.id === Number(params.id))

	return product ? (
		<div className='flex justify-around items-center my-0 mx-auto w-8/12 max-w-[850px] min-w-[700px]'>
			<ImageContainer width={300} height={300} image={product.image} />
			<div className='w-1/2'>
				<p className='text-2xl font-bold mx-0 my-7 mb-1'>{product.title}</p>
				<Rating rating={product.rating.rate} reviews={product.rating.count} />
				<p className='mt-2 font-bold'>Details: </p>
				<p className='max-h-[150px] overflow-hidden'>{product.description}</p>
				<p className='my-2 mx-0 font-bold text-2xl text-red-700'>${product.price}</p>
				<p className='inline mr-2 text-xl text-gray-800 font-bold'>Quantity: </p>
				<QuantitySelector
					quantity={quantity}
					increaseQuantity={() => setQuantity(quantity + 1)}
					decreaseQuantity={() => quantity > 1 && setQuantity(quantity - 1)}
				/>
				<div className='w-full flex justify-between mt-3.5'>
					<button
						className='text-red-700 text-xl py-2 px-9 cursor-pointer border border-red-700'
						onClick={() => dispatch(pushCartItems({ id: product.id, amount: quantity }))}
					>
						Add to cart
					</button>
					<button className='text-xl py-2 px-9 cursor-pointer bg-red-700 text-white border-none mr-2.5'>
						Buy now
					</button>
				</div>
			</div>
		</div>
	) : (
		<Error />
	)
}

export default Product
