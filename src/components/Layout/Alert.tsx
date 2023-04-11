import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { BsCheckCircle } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { hideAlert } from 'redux/features/alert'
import { useEffect } from 'react'

const Alert = () => {
	const dispatch = useAppDispatch()
	const { text, show, timeout } = useAppSelector((store) => store.alert)
	useEffect(() => {
		setTimeout(() => show && dispatch(hideAlert()), timeout)
	}, [show])
	return (
		<div
			className={`fixed bottom-8 right-10 
			flex items-center justify-around py-2 px-4 
			text-base text-gray-800 font-semibold 
			bg-green-200 rounded-lg overflow-hidden 
			transition duration-200 ease-in-out 
			${!show ? 'translate-x-5 opacity-0' : ''}`}
		>
			<div className='absolute left-0 top-0 h-full w-3 bg-green-400'></div>
			<BsCheckCircle className='mx-2' />
			{text}
			<ImCross
				className='ml-3'
				color='green'
				size={10}
				onClick={() => dispatch(hideAlert())}
			/>
		</div>
	)
}

export default Alert
