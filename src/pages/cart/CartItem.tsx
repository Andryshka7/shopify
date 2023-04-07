import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { ICartItem } from 'types/cartItem'
import { decreaseAmountOfItem, increaseAmountOfItem, removeCartItem } from 'redux/cart'
import QuantitySelector from 'components/QuantitySelector'
import ImageContainer from 'components/ImageContainer'

const CartItem = ({ id, amount }: ICartItem) => {
	const dispatch = useAppDispatch()
	const { productList } = useAppSelector((store) => store.products)

	const product = productList.find((product) => product.id === id)
	if (!product) return <></>

	const increaseQuantity = () => dispatch(increaseAmountOfItem(id))
	const decreaseQuantity = () => dispatch(decreaseAmountOfItem(id))

	return (
		<div className='flex items-center w-9/12 min-w-[500px] my-[10px] mx-auto'>
			<ImageContainer width={80} height={80} image={product.image} />
			<div className='w-[500px] ml-[10px]'>
				<h2 className='line-clamp-1 text-ellipsis text-xl m-0 mb-[10px]'>{product.title}</h2>
				<QuantitySelector
					quantity={amount}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
				<h3 className='inline ml-[10px]'>${(product.price * amount).toFixed(2)}</h3>
			</div>
			<button
				className=' bg-red-500 text-white text-[15px] border-0 px-5 py-1 ml-10 rounded-[5px]'
				onClick={() => dispatch(removeCartItem(id))}
			>
				REMOVE
			</button>
		</div>
	)
}

export default CartItem
