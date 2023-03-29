import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { applyAlphabeticalFilter, applyPriceFilter } from 'redux/filtersSlice'
import { applyCategory, clearCategories } from 'redux/filtersSlice'
import products from 'products'
import './filters.css'

const Filters = () => {
	const dispatch = useAppDispatch()
	const { price_sort, alphabetical_sort, categories } = useAppSelector((store) => store.filters)

	const priceClass = price_sort ? 'selected' : 'category'
	const nameClass = alphabetical_sort ? 'selected' : 'category'

	const allCategories = Array.from(new Set(products.map((item) => item.category)))
	return (
		<div className='filters'>
			<h1>Filter by</h1>

			<h2>Categories</h2>
			<p
				className={!categories.length ? 'selected' : 'category'}
				onClick={() => dispatch(clearCategories())}
			>
				ALL
			</p>
			{allCategories.map((category) => {
				const className = categories.includes(category) ? 'selected' : 'category'
				const handleOnClick = () => dispatch(applyCategory(category))
				return (
					<p className={className} onClick={handleOnClick} key={`k${category}`}>
						{category.toUpperCase()}
					</p>
				)
			})}

			<h2>Order</h2>
			<p className={priceClass} onClick={() => dispatch(applyPriceFilter())}>
				PRICE
				{price_sort === 1 && <BsArrowUp />}
				{price_sort === -1 && <BsArrowDown />}
			</p>
			<p className={nameClass} onClick={() => dispatch(applyAlphabeticalFilter())}>
				NAME
				{alphabetical_sort === 1 && ' (a-z)'}
				{alphabetical_sort === -1 && ' (z-a)'}
			</p>
		</div>
	)
}

export default Filters
