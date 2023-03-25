import { useAppDispatch } from 'hooks/storehooks'
import { ICartItem } from 'types/cartItem'
import { decreaseAmountOfItem, increaseAmountOfItem, removeCartItem } from 'redux/cartSlice'
import QuantitySelector from 'components/quantity selector/QuantitySelector'
import products from 'products'

const CartItem = ({ id, amount }: ICartItem) => {
	const dispatch = useAppDispatch()

	const product = products.find((product) => product.id === id)
	if (!product) return <></>

	const { name, image, price } = product
	const increaseQuantity = () => dispatch(increaseAmountOfItem(id))
	const decreaseQuantity = () => dispatch(decreaseAmountOfItem(id))

	return (
		<div className='cart-item'>
			<img src={image} alt='' />
			<div className='left-info'>
				<h2>{name}</h2>
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
