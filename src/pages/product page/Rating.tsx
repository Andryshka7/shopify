import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating, reviews }: { rating: number; reviews: number }) => {
	rating = Math.round(rating)
	return (
		<div className='rating'>
			{rating > 0 ? <AiFillStar color='red' /> : <AiOutlineStar color='red' />}
			{rating > 1 ? <AiFillStar color='red' /> : <AiOutlineStar color='red' />}
			{rating > 2 ? <AiFillStar color='red' /> : <AiOutlineStar color='red' />}
			{rating > 3 ? <AiFillStar color='red' /> : <AiOutlineStar color='red' />}
			{rating > 4 ? <AiFillStar color='red' /> : <AiOutlineStar color='red' />}
			<span>{`(${reviews})`}</span>
		</div>
	)
}

export default Rating
