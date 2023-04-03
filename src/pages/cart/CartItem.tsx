import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { ICartItem } from 'types/cartItem'
import { decreaseAmountOfItem, increaseAmountOfItem, removeCartItem } from 'redux/cart'
import QuantitySelector from 'components/quantity selector/QuantitySelector'
import ImageContainer from 'components/image container/ImageContainer'

const CartItem = ({ id, amount }: ICartItem) => {
	const dispatch = useAppDispatch()
	const { productList } = useAppSelector((store) => store.products)

	const product = productList.find((product) => product.id === id)
	if (!product) return <></>

	const increaseQuantity = () => dispatch(increaseAmountOfItem(id))
	const decreaseQuantity = () => dispatch(decreaseAmountOfItem(id))

	return (
		<div className='cart-item'>
			<ImageContainer width={80} height={80} image={product.image} />
			<div className='left-info'>
				<h2>{product.title}</h2>
				<QuantitySelector
					quantity={amount}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
				/>
				<h3 className='price'>${(product.price * amount).toFixed(2)}</h3>
			</div>
			<button className='remove-item' onClick={() => dispatch(removeCartItem(id))}>
				REMOVE
			</button>
		</div>
	)
}

export default CartItem
