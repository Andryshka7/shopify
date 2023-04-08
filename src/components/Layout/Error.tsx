import { NavLink } from 'react-router-dom'

const Error = () => (
	<div className='flex justify-center items-center mt-[20px] bg-[#f9f9f9]'>
		<div className='w-[400px] bg-[fff] rounded-lg px-[40px] py-[30px] text-center shadow-md'>
			<h1 className='text-gray-700 m-0 text-[72px]'>404</h1>
			<h2 className='text-gray-800 text-[24px] font-normal'>
				Oops! The page you are looking for cannot be found.
			</h2>
			<NavLink
				to='/'
				className='bg-gray-600 text-white inline-block rounded-[4px] px-[24px] py-[12px] transition duration-300 ease-in-out mt-[24px] hover:bg-gray-700'
			>
				Go Home
			</NavLink>
		</div>
	</div>
)

export default Error
