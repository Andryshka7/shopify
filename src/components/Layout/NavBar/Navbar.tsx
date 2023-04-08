import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import Search from 'components/Search'
import { CartIcon } from './CartIcon'

const navigators = [
	{ id: 1, link: '/', name: 'Home' },
	{ id: 2, link: 'products', name: 'Products' },
]

const Navbar = () => {
	const { cart } = useAppSelector((store) => store)
	const [selected, setSelected] = useState<number | null>(1)

	return (
		<nav className='flex justify-around items-center py-4'>
			<NavLink to='/' onClick={() => setSelected(1)}>
				<h2 className='text-gray-800 text-[25px] font-bold'>Shopify</h2>
			</NavLink>
			<div className='flex justify-between w-[11%] min-w-[150px] text-xl'>
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
			<CartIcon handleOnClick={() => setSelected(null)} />
		</nav>
	)
}

export default Navbar
