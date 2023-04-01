import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { ICartItem } from 'types/cartItem'
import { decreaseAmountOfItem, increaseAmountOfItem, removeCartItem } from 'redux/cart'
import QuantitySelector from 'components/quantity selector/QuantitySelector'
import ImageContainer from 'components/image container/ImageContainer'

const CartItem = ({ id, amount }: ICartItem) => {
	const dispatch = useAppDispatch()
	const { products } = useAppSelector((store) => store)

	const product = products.find((product) => product.id === id)
	if (!product) return <></>

	const { title, image, price } = product
	const increaseQuantity = () => dispatch(increaseAmountOfItem(id))
	const decreaseQuantity = () => dispatch(decreaseAmountOfItem(id))

	return (
		<div className='cart-item'>
			<ImageContainer width={80} height={80} image={image} />
			<div className='left-info'>
				<h2>{title}</h2>
				<QuantitySelector
					quantity={amount}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
				<h3 className='price'>${(price * amount).toFixed(2)}</h3>
			</div>
			<button className='remove-item' onClick={() => dispatch(removeCartItem(id))}>
				REMOVE
			</button>
		</div>
	)
}

export default CartItem
