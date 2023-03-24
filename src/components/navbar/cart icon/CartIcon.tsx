import cart from 'assets/shopping-cart.png'
import { NavLink } from 'react-router-dom'
import './cartIcon.css'

const Cart = () => {
	return (
		<NavLink to={'cart'}>
			<img src={cart} alt='cart' className='cart' />
		</NavLink>
	)
}

export default Cart
