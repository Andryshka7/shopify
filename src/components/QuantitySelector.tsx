import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

type QuantitySelectorProps = {
	quantity: number
	increaseQuantity: () => void
	decreaseQuantity: () => void
}
const QuantitySelector = ({ quantity, increaseQuantity, decreaseQuantity }: QuantitySelectorProps) => {
	const sign = 'flex w-[30px] h-[30px] justify-center items-center'

	const minus = `text-red-600 ${sign}`
	const num = `text-[18px] border-l border-r border-gray-500 ${sign}`
	const plus = `text-green-600 ${sign}`

	return (
		<div className='inline-flex items-center w-fit'>
			<div className='flex border border-gray-500'>
				<div className={minus} onClick={decreaseQuantity} children={<AiOutlineMinus />} />
				<div className={num}>{quantity}</div>
				<div className={plus} onClick={increaseQuantity} children={<AiOutlinePlus />} />
			</div>
		</div>
	)
}

export default QuantitySelector
