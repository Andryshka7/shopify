import { useAppSelector } from 'hooks/storehooks'
import './cart.css'
import CartItem from './CartItem'

const Cart = () => {
	const { cart } = useAppSelector((store) => store)
	console.log(cart)

	return (
		<>
			{cart.length ? (
				<div className='cart'>
					{cart.map((item) => (
						<CartItem {...item} key={'c' + item.id} />
					))}
					<hr />
				</div>
			) : (
				<h1 className='cart-info'>
					Your cart is empty!
					<hr />
				</h1>
			)}
		</>
	)
}

export default Cart
