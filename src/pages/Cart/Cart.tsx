import { useAppSelector } from 'hooks/storehooks'
import CartItem from './CartItem'

const Cart = () => {
	const { cart, products } = useAppSelector((store) => store)

	const prices = cart.map(({ id, amount }) => {
		const product = products.productList.find((product) => product.id === id)
		return product ? product.price * amount : 0
	})
	const total = cart.length ? prices.reduce((a, b) => a + b) : 0

	return (
		<div className='w-fit my-0 mx-auto'>
			{!cart.length ? (
				<h1 className='text-[30px] font-semibold w-[400px] text-center my-[20px] mx-auto'>Your cart is empty!</h1>
			) : (
				cart.map((item) => <CartItem {...item} key={'c' + item.id} />)
			)}
			<hr className='h-[2px] my-2 border-0 rounded dark:bg-gray-300' />

			{!!total && (
				<p className='font-medium w-fit text-[#303030] ml-auto mr-[20px]'>
					Total: ${total.toFixed(2)}
				</p>
			)}
		</div>
	)
}

export default Cart
