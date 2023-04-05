import { useState } from 'react'
import { useAppSelector } from 'hooks/storehooks'
import { NavLink } from 'react-router-dom'
import ImageContainer from 'components/image container/ImageContainer'
import './Search.css'

const Search = () => {
	const { productList } = useAppSelector((store) => store.products)
	const [value, setValue] = useState<string>('mens')
	const [showResults, setShowResults] = useState<boolean>(false)

	const valueIsIn = (a: string) => value.trim() && a.toLowerCase().includes(value.toLowerCase())
	const resultsClass = showResults ? 'results results-shown' : 'results results-hidden'

	return (
		<div className='search' >
			<input
				type='text'
				className='search'
				placeholder='Search'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onFocus={() => setShowResults(true)}
				onBlur={(e) => {
					if (e.relatedTarget?.firstElementChild?.className !== 'search-result')
						setShowResults(false)
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
							<div className='search-result'>
								<ImageContainer image={image} width={50} height={50} />
								<p>{title}</p>
							</div>
						</NavLink>
					))}
			</div>
		</div>
	)
}

export default Search
