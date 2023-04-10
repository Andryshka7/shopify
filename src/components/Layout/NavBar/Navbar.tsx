import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CartIcon from './CartIcon'
import Search from 'components/Search'

const Navbar = () => {
	const navlinkStyle = 'transition duration-200 font-normal text-gray-500 hover:text-black'
	const scrollFn = (el: HTMLElement) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })

	return (
		<nav className='flex justify-around items-center py-4'>
			<NavLink to='/'>
				<h2 className='text-gray-800 text-2xl font-bold'>Shopify</h2>
			</NavLink>
			<div className='flex justify-between w-1/4 min-w-[280px] text-xl'>
				<NavLink to={'/'} className={navlinkStyle}>
					Home
				</NavLink>
				<NavLink to={'/products'} className={navlinkStyle}>
					Products
				</NavLink>
				<HashLink to={'/#about'} className={navlinkStyle} scroll={scrollFn}>
					About
				</HashLink>
				<HashLink to={'/#contact'} className={navlinkStyle} scroll={scrollFn}>
					Contact
				</HashLink>
			</div>
			<Search />
			<CartIcon />
		</nav>
	)
}

export default Navbar
