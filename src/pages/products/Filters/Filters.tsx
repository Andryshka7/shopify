import Categories from './Categories'
import Order from './Order'

const Filters = () => {
	return (
		<div className='filters'>
			<h1 className='name'>Filter by</h1>
			<Categories />
			<Order />
		</div>
	)
}

export default Filters
