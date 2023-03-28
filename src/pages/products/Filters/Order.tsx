import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { BsArrowDown, BsArrowDownUp, BsArrowUp } from 'react-icons/bs'
import { applyAlphabeticalFilter, applyPriceFilter } from 'redux/filtersSlice'
import { IFilters } from 'types/filters'

const PriceIcon = ({ filters }: { filters: IFilters }) => {
	switch (true) {
		case filters.price_ascending:
			return <BsArrowUp />
		case filters.price_decending:
			return <BsArrowDown />
		default:
			return <BsArrowDownUp />
	}
}

const Order = () => {
	const dispatch = useAppDispatch()
	const { filters } = useAppSelector((store) => store)
	const { price_ascending, price_decending, alphabetical_reversed } = filters

	const priceClass = price_ascending || price_decending ? 'selected' : 'category'

	return (
		<>
			<h2>Order</h2>
			<p className={priceClass} onClick={() => dispatch(applyPriceFilter())}>
				PRICE {<PriceIcon filters={filters} />}
			</p>
			<p className='category' onClick={() => dispatch(applyAlphabeticalFilter())}>
				NAME {alphabetical_reversed ? '(z-a)' : '(a-z)'}
			</p>
		</>
	)
}

export default Order
