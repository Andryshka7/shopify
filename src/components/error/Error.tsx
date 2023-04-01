import { NavLink } from 'react-router-dom'
import './error.css'

const Error = () => {
	return (
		<div className='error-container'>
			<div className='error-card'>
				<h1 className='error-code'>404</h1>
				<h2 className='error-message'>Oops! The page you are looking for cannot be found.</h2>
				<NavLink to='/' className='error-button'>Go Home</NavLink>
			</div>
		</div>
	)
}

export default Error
