import { useAppSelector } from 'hooks/storehooks'
import './cart.css'
import CartItem from './CartItem'

const Cart = () => {
	const { cart } = useAppSelector((store) => store)
	console.log(cart)

	return (
		<div className='cart'>
			{cart.map((item) => (
				<CartItem {...item} key={'c' + item.id}/>
			))}
			<hr />
		</div>
	)
}

export default Cart
