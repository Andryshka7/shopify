import { useAppSelector } from 'hooks/storehooks'
import CartItem from './CartItem'

const Cart = () => {
	const {
		cart,
		products: { productList },
	} = useAppSelector((store) => store)

	if (!cart.length)
		return (
			<h1 className='text-[30px] w-[400px] text-center my-[20px] mx-auto'>
				Your cart is empty!
				<hr className='h-[2px] my-2 border-0 rounded dark:bg-gray-300' />
			</h1>
		)

	const total = cart
		.map(({ id, amount }) => (productList.find((product) => product.id === id)?.price || 0) * amount)
		.reduce((a, b) => a + b)

	return (
		<div className='w-1/2 my-0 mx-auto'>
			{cart.map((item) => (
				<CartItem {...item} key={'c' + item.id} />
			))}
			<hr className='h-[2px] my-2 border-0 rounded dark:bg-gray-300' />
			<p className='font-medium w-fit text-[#303030] ml-auto mr-[20px]'>Total: ${total.toFixed(2)}</p>
		</div>
	)
}

export default Cart
