import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartIcon from './cart icon/CartIcon'
import './navbar.css'

const navigators = [
	{ id: 1, link: '/', name: 'Home' },
	{ id: 2, link: 'products', name: 'Products' },
	{ id: 3, link: 'about', name: 'About' },
	{ id: 4, link: 'contact', name: 'Contact' },
]

const Navbar = () => {
	const [selected, setSelected] = useState<number | null>(null)

	return (
		<nav>
			<NavLink to='/' className='navlink-name' onClick={() => setSelected(1)}>
				<h2>Shopify</h2>
			</NavLink>
			<div>
				{navigators.map(({ id, link, name }) => (
					<NavLink
						to={link}
						className='navlink'
						style={{ color: id === selected ? 'black' : '' }}
						onClick={() => setSelected(id)}
						key={name}
					>
						{name}
					</NavLink>
				))}
			</div>
			<CartIcon />
		</nav>
	)
}

export default Navbar
