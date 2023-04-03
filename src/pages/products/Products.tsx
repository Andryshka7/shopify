import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from 'hooks/storehooks'
import Loader from 'components/loader/Loader'
import filtersIcon from 'assets/filters-icon.png'
import Filters from './Filters/Filters'
import ImageContainer from 'components/image container/ImageContainer'
import useFilteredProducts from 'hooks/useFilterProducts'
import './products.css'
import Search from './Search/Search'

const Products = () => {
	const { loading } = useAppSelector((store) => store.products)
	const products = useFilteredProducts()

	return loading ? (
		<Loader />
	) : (
		<>
			<Search />
			<div className='products-container'>
				<Filters />
				<div className='products'>
					{products.map(({ id, title, image, price }) => (
						<NavLink to={String(id)} className='product' key={'p' + id}>
							<div>
								<ImageContainer width={200} height={200} image={image} />
								<div className='info'>
									<p className='product-name'>{title}</p>
									<p className='product-price'>${price}</p>
								</div>
							</div>
						</NavLink>
					))}
				</div>
			</div>
		</>
	)
}

export default Products
