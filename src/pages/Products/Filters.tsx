import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { applyAlphabeticalFilter, applyPriceFilter, clearFilters } from 'redux/features/filters'
import { applyCategory, clearCategories } from 'redux/features/filters'

const Filters = () => {
	const dispatch = useAppDispatch()

	const { productList } = useAppSelector((store) => store.products)
	const { price_sort, alphabetical_sort, categories } = useAppSelector((store) => store.filters)

	const allCategories = Array.from(new Set(productList.map((item) => item.category)))

	const getClassName = (condition: boolean | number) =>
		'font-medium text-sm my-2.5 mx-0 transition linear duration-200 cursor-pointer hover:scale-[1.03] ' +
		(condition ? 'text-black' : 'text-gray-500')

	return (
		<div className='mt-8 min-w-[200px] h-fit'>
			<h1 className='text-3xl font-bold mb-3.5'>Filter by</h1>

			<h2 className='font-bold text-xl'>Categories</h2>
			<p
				className={getClassName(!categories.length)}
				onClick={() => dispatch(clearCategories())}>
				ALL
			</p>
			{allCategories.map((category) => (
				<p
					className={getClassName(categories.includes(category))}
					onClick={() => dispatch(applyCategory(category))}
					key={`k${category}`}>
					{category.toUpperCase()}
				</p>
			))}
			<h2 className='font-bold text-xl'>Order</h2>
			<p className={getClassName(price_sort)} onClick={() => dispatch(applyPriceFilter())}>
				PRICE {price_sort === 1 && <BsArrowUp className='inline' />}
				{price_sort === -1 && <BsArrowDown className='inline' />}
			</p>
			<p
				className={getClassName(alphabetical_sort)}
				onClick={() => dispatch(applyAlphabeticalFilter())}>
				NAME
				{alphabetical_sort === 1 && ' (a-z)'}
				{alphabetical_sort === -1 && ' (z-a)'}
			</p>
			<button
				className='block py-2.5 px-5 my-3 mx-1 bg-gray-100 border-2 border-gray-300 text-base font-bold rounded-md transition linear duration-200 hover:bg-gray-100 hover:scale-[1.05]'
				onClick={() => dispatch(clearFilters())}>
				Clear Filters
			</button>
		</div>
	)
}

export default Filters
