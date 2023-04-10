import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import cartImage from 'assets/shopping-cart.png'

const CartIcon = () => {
	const { cart } = useAppSelector((store) => store)
	return (
		<NavLink className='w-[35px] h-[35px] relative ' to={'cart'}>
			<img src={cartImage} alt='cart' />
			{!!cart.length && (
				<div className='bg-[red] w-[20px] h-[20px] text-[white] text-[15px] rounded-full flex justify-center items-center absolute bottom-4 left-6 font-semibold'>
					<span>{cart.length}</span>
				</div>
			)}
		</NavLink>
	)
}

export default CartIcon
