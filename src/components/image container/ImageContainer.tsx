interface IImageContainerProps {
	height: number
	width: number
	image: string
}

const ImageContainer = ({ height, width, image }: IImageContainerProps) => {
	const divStyles = {
		minWidth: width,
		minHeight: height,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
	const imageStyles = {
		maxWidth: width,
		maxHeight: height,
	}
	return (
		<div style={divStyles} className='image-container'>
			<img src={image} style={imageStyles} alt='' />
		</div>
	)
}

export default ImageContainer
