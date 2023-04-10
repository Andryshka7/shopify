import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

type FormFields = {
	name: string
	email: string
	subject: string
	message: string
}

const Conact = () => {
	const { register, handleSubmit, formState, reset } = useForm<FormFields>({ mode: 'onBlur' })

	const submitFn = async (data: FormFields) => {
		reset()
		try {
			await emailjs.send('service_8iep0vs', 'template_tg7xder', data, 'AHSBJcxNmS8h9nJaV')
			console.log('Message sent')
		} catch (error) {
			console.log('An error occured while sending message:', error)
		}
	}

	const inputStyles = <T extends keyof FormFields>(name: T, width: string) =>
		`${width} h-fit py-2 px-4 text-2xl mt-2 border-2 border-gray-300 rounded-md focus:outline-none ${
			formState.errors[name] ? 'border-red-500' : 'focus:border-blue-500'
		}`

	return (
		<form
			onSubmit={handleSubmit(submitFn)}
			className='w-6/12 py-5 px-10 mx-auto mt-24 mb-16 bg-gradient-to-t from-transparent to-slate-200 rounded-xl shadow-lg shadow-gray-300'
			id='contact'
		>
			<h1 className='text-2xl text-center font-medium mb-5 mx-5'>Contact Us</h1>
			<div className='flex justify-between'>
				<input
					{...register('name', { required: true })}
					className={inputStyles('name', 'w-[49%]')}
					placeholder='Your name'
				/>
				<input
					{...register('email', {
						required: true,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
							message: 'Not a valid email!',
						},
					})}
					className={inputStyles('email', 'w-[49%]')}
					placeholder='Your email'
				/>
			</div>
			<input
				{...register('subject', { required: true })}
				className={inputStyles('subject', 'w-full')}
				placeholder='Subject'
			/>
			<textarea
				{...register('message', { required: true })}
				className={inputStyles('message', 'w-full')}
				placeholder='Message text'
			/>
			<button className='block h-[40px] w-full mt-3 mx-auto bg-blue-500 text-white text-xl font-medium rounded-md'>
				Submit
			</button>
		</form>
	)
}

export default Conact
