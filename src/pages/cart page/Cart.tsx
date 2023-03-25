import { useAppSelector } from 'hooks/storehooks'
import CartItem from './CartItem'
import './cart.css'
import products from 'products'

const Cart = () => {
	const { cart } = useAppSelector((store) => store)

	if (!cart.length)
		return (
			<h1 className='cart-info'>
				Your cart is empty!
				<hr />
			</h1>
		)

	const prices = cart.map(
		({ id, amount }) => (products.find((product) => product.id === id)?.price || 0) * amount
	)
	const total = prices.reduce((a, b) => a + b)
	return (
		<div className='cart'>
			{cart.map((item) => (
				<CartItem {...item} key={'c' + item.id} />
			))}
			<hr />
			<p className='total'>Total: ${total}</p>
		</div>
	)
}

export default Cart
