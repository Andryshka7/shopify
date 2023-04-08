import { useState } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import { NavLink } from 'react-router-dom'
import ImageContainer from 'components/ImageContainer'

const Search = () => {
	const { productList } = useAppSelector((store) => store.products)
	const [value, setValue] = useState<string>('')
	const [showResults, setShowResults] = useState<boolean>(false)

	const valueIsIn = (a: string) => value.trim() && a.toLowerCase().includes(value.toLowerCase())

	const resultsClass =
		'search-results absolute w-[260px] max-h-[260px] bg-white overflow-y-scroll mt-[5px] transition transition-duration-300 ' +
		(showResults ? '' : 'opacity-0 pointer-events-none -translate-y-1.5')

	return (
		<div className='z-10'>
			<input
				type='text'
				className='h-9 w-64 px-5 text-center text-lg border-2 border-gray-300 rounded-md transition duration-300 outline-none focus:border-blue-500'
				placeholder='Search'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onFocus={() => setShowResults(true)}
				onBlur={(e) => {
					const elementClass = e.relatedTarget?.firstElementChild?.className
					if (elementClass !== 'search-result') setShowResults(false)
				}}
			/>
			<div className={resultsClass}>
				{productList
					.filter(({ title, category }) => valueIsIn(title) || valueIsIn(category))
					.map(({ image, title, id }, index) => (
						<NavLink
							to={`/products/${id}`}
							onClick={() => setShowResults(false)}
							key={'s' + index}
						>
							<div className='flex cursor-pointer mt-[5px]'>
								<ImageContainer image={image} width={50} height={50} />
								<p className='ml-[10px] line-clamp-2'>{title}</p>
							</div>
						</NavLink>
					))}
			</div>
		</div>
	)
}

export default Search
