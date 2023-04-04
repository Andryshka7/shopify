import { useState } from 'react'
import './Search.css'
import { useAppSelector } from 'hooks/storehooks'
import ImageContainer from 'components/image container/ImageContainer'
import { NavLink } from 'react-router-dom'

const Results = () => {}

const func = (a: string, b: string) => a.includes(b)

const Search = () => {
	const { productList } = useAppSelector((store) => store.products)
	const [value, setValue] = useState<string>('mens')
	const [showResults, setShowResults] = useState<boolean>(false)

	const valueIsIn = (a: string) => value.trim() && a.toLowerCase().includes(value.toLowerCase())
	const resultsClass = showResults ? 'results results-shown' : 'results results-hidden'

	return (
		<div className='search'>
			<input
				type='text'
				className='search'
				placeholder='Search'
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onFocus={() => setShowResults(true)}
				onBlur={() => setShowResults(false)}
			/>
			<div className={resultsClass}>
				{productList
					.filter(({ title, category }) => valueIsIn(title) || valueIsIn(category))
					.map(({ image, title, id }, index) => (
						<NavLink to={`/products/${id}`} key={'s' + index}>
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
