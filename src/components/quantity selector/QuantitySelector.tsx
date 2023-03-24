import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './quantitySelector.css'

type IQuantitySelectorProps = {
	quantity: number
	increaseQuantity: () => void
	decreaseQuantity: () => void
}
const QuantitySelector = ({ quantity, increaseQuantity, decreaseQuantity }: IQuantitySelectorProps) => {
	return (
		<div className='quantity'>
			<div className='quantity-content'>
				<div className='minus' onClick={decreaseQuantity} children={<AiOutlineMinus />} />
				<div className='num'>{quantity}</div>
				<div className='plus' onClick={increaseQuantity} children={<AiOutlinePlus />} />
			</div>
		</div>
	)
}

export default QuantitySelector
