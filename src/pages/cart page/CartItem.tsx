import { useState } from 'react'
import products from 'products'
import { ICartItem } from 'types/cartItem'
import QuantitySelector from 'components/quantity selector/QuantitySelector'
import { useAppDispatch } from 'hooks/storehooks'
import { removeCartItem } from 'redux/cartSlice'

const CartItem = ({ id, amount: n }: ICartItem) => {
	const dispatch = useAppDispatch()
	const [amount, setAmount] = useState<number>(n)

	const product = products.find((product) => product.id === id)
	if (!product) return <></>

	const { name, image, price } = product
	const increaseQuantity = () => setAmount(amount + 1)
	const decreaseQuantity = () => (amount > 1 ? setAmount(amount - 1) : dispatch(removeCartItem(id)))

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
