import products from 'products'

const Filters = () => {
	const categories = ['all', ...Array.from(new Set(products.map((item) => item.category)))]
	return (
		<div className='filters'>
			<h1 className='name'>Filter by</h1>
			<h2>Categories</h2>
			{categories.map((category) => (
				<p className='category'>{category.toUpperCase()}</p>
			))}
		</div>
	)
}

export default Filters