import { useState } from 'react'
import products from 'products'
import { ICartItem } from 'types/cartItem'
import { TiDeleteOutline } from 'react-icons/ti'
import QuantitySelector from 'components/quantity selector/QuantitySelector'

const CartItem = ({ id, amount: n }: ICartItem) => {
	const [amount, setAmount] = useState<number>(n)

	const product = products.find((product) => product.id === id)
	if (!product) return <></>

	const { name, image, price } = product
	const increaseQuantity = () => setAmount(amount + 1)
	const decreaseQuantity = () => setAmount(amount - 1)

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
			<div className='right-info'>
				<TiDeleteOutline color='red' size={25} />
			</div>
		</div>
	)
}

export default CartItem
