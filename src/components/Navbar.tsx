import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import cartIcon from 'assets/shopping-cart.png'
import Search from 'components/Search'

const navigators = [
	{ id: 1, link: '/', name: 'Home' },
	{ id: 2, link: 'products', name: 'Products' },
	{ id: 3, link: 'contact', name: 'Contact' },
]

const Navbar = () => {
	const { cart } = useAppSelector((store) => store)
	const [selected, setSelected] = useState<number | null>(1)

	return (
		<nav className='flex justify-around items-center py-4'>
			<NavLink to='/' onClick={() => setSelected(1)}>
				<h2 className='text-gray-800 text-[25px] font-bold'>Shopify</h2>
			</NavLink>
			<div className='flex justify-between w-1/5 min-w-[220px] text-xl'>
				{navigators.map(({ id, link, name }) => (
					<NavLink
						to={link}
						style={{ color: id === selected ? 'black' : '' }}
						onClick={() => setSelected(id)}
						className={`transition duration-200 font-normal ${
							id === selected ? 'text-[black]' : 'text-gray-500'
						}`}
						key={name}
					>
						{name}
					</NavLink>
				))}
			</div>
			<Search />
			<NavLink
				className='w-[35px] h-[35px] relative '
				to={'cart'}
				style={{ textDecoration: 'none' }}
				onClick={() => setSelected(null)}
			>
				<img src={cartIcon} alt='cart' />
				{Boolean(cart.length) && (
					<div className='bg-[red] w-[20px] h-[20px] text-[white] text-[15px] rounded-full flex justify-center items-center absolute bottom-4 left-6 font-semibold'>
						<span>{cart.length}</span>
					</div>
				)}
			</NavLink>
		</nav>
	)
}

export default Navbar
