import { useForm } from 'react-hook-form'

const Conact = () => {
	const { register, handleSubmit } = useForm()

	const submitFn = (data: any) => {
		console.log(data)
	}

	const inputClassName =
		'h-fit py-2 px-4 text-2xl mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'

	return (
		<form
			onSubmit={handleSubmit(submitFn)}
			className='w-6/12 py-5 px-10 mx-auto mt-16 mb-10 bg-gradient-to-t from-transparent to-slate-200 rounded-xl shadow-lg shadow-gray-300'>
			<h1 className='text-2xl text-center font-medium mb-5 mx-5'>Contact Us</h1>
			<div className='flex justify-between'>
				<input
					{...register('name')}
					className={'w-[49%] ' + inputClassName}
					placeholder='Your name'
				/>
				<input
					{...register('email')}
					className={'w-[49%] ' + inputClassName}
					placeholder='Your email'
				/>
			</div>
			<input
				{...register('subject')}
				className={'w-full ' + inputClassName}
				placeholder='Subject'
			/>
			<textarea
				{...register('text')}
				className={'w-full ' + inputClassName}
				placeholder='Message text'
			/>
			<button className='block h-[40px] w-full mt-3 mx-auto bg-blue-500 text-white text-xl font-medium rounded-md'>
				Submit
			</button>
		</form>
	)
}

export default Conact
