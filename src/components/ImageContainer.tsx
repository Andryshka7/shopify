interface IImageContainerProps {
	height: number
	width: number
	image: string
}

const ImageContainer = ({ height, width, image }: IImageContainerProps) => {
	const divClass = `flex items-center justify-center min-h-[${height}px] min-w-[${width}px]`
	const imgClass = `max-w-[${width}px] max-h-[${height}px]`
	return (
		<div className={divClass}>
			<img src={image} className={imgClass} alt='' />
		</div>
	)
}

export default ImageContainer
