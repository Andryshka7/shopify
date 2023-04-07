import { useForm } from 'react-hook-form'

const Conact = () => {
	const { register, handleSubmit } = useForm()

	const submitFn = (data: any) => {
		console.log(data)
	}

	const inputClassName =
		'block h-fit w-[350px] py-2 px-4 mx-auto text-2xl mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'

	return (
		<form
			onSubmit={handleSubmit(submitFn)}
			className='w-[450px] py-5 px-2.5 mx-auto my-10 border bg-slate-200 border-gray-200 rounded-xl'
		>
			{/* <h1 className='text-2xl font-medium mb-2 mx-5'>Contact Us</h1> */}
			<input {...register('name')} className={inputClassName} placeholder='Your name' />
			<input {...register('email')} className={inputClassName} placeholder='Your email' />
			<textarea {...register('text')} className={inputClassName} placeholder='Message text' />
			<button className='block h-[40px] w-[350px] mt-3 mx-auto bg-blue-500 text-white text-xl font-medium rounded-md'>
				Submit
			</button>
		</form>
	)
}

export default Conact
