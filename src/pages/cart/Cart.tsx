import { useAppSelector } from 'hooks/storehooks'
import CartItem from './CartItem'
import './cart.css'

const Cart = () => {
	const {
		cart,
		products: { productList },
	} = useAppSelector((store) => store)

	if (!cart.length)
		return (
			<h1 className='cart-info'>
				Your cart is empty!
				<hr />
			</h1>
		)

	const total = cart
		.map(({ id, amount }) => (productList.find((product) => product.id === id)?.price || 0) * amount)
		.reduce((a, b) => a + b)

	return (
		<div className='cart'>
			{cart.map((item) => (
				<CartItem {...item} key={'c' + item.id} />
			))}
			<hr />
			<p className='total'>Total: ${total.toFixed(2)}</p>
		</div>
	)
}

export default Cart
