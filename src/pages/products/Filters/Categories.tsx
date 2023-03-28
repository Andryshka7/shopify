import products from 'products'
import { applyCategory, clearCategories } from 'redux/filtersSlice'
import { useAppDispatch, useAppSelector } from 'hooks/storehooks'

const Categories = () => {
	const dispatch = useAppDispatch()
	const { filters } = useAppSelector((store) => store)
	const categories = Array.from(new Set(products.map((item) => item.category)))

	return (
		<>
			<h2>Categories</h2>
			<p
				className={`category ${!filters.categories.length ? 'selected' : ''}`}
				onClick={() => dispatch(clearCategories())}
			>
				ALL
			</p>

			{categories.map((category) => (
				<p
					className={`category ${filters.categories.includes(category) ? 'selected' : ''}`}
					onClick={() => dispatch(applyCategory(category))}
					key={'k' + category}
				>
					{category.toUpperCase()}
				</p>
			))}
		</>
	)
}

export default Categories
