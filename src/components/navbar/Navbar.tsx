import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import cartIcon from 'assets/shopping-cart.png'
import './navbar.css'
import Search from 'components/Search/Search'

const navigators = [
	{ id: 1, link: '/', name: 'Home' },
	{ id: 2, link: 'products', name: 'Products' },
	{ id: 3, link: 'contact', name: 'Contact' },
]

const Navbar = () => {
	const { cart } = useAppSelector((store) => store)
	const [selected, setSelected] = useState<number | null>(1)

	return (
		<nav>
			<NavLink
				to='/'
				className='navlink-name'
				onClick={() => setSelected(1)}
				style={{ textDecoration: 'none' }}
			>
				<h2>Shopify</h2>
			</NavLink>
			<div>
				{navigators.map(({ id, link, name }) => (
					<NavLink
						to={link}
						className='navlink'
						style={{ color: id === selected ? 'black' : '', textDecoration: 'none' }}
						onClick={() => setSelected(id)}
						key={name}
					>
						{name}
					</NavLink>
				))}
			</div>
			<Search />
			<NavLink
				className='cart-icon'
				to={'cart'}
				style={{ textDecoration: 'none' }}
				onClick={() => setSelected(null)}
			>
				<img src={cartIcon} alt='cart' />
				{Boolean(cart.length) && (
					<div className='cart-size'>
						<span>{cart.length}</span>
					</div>
				)}
			</NavLink>
		</nav>
	)
}

export default Navbar
