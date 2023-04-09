import { useAppDispatch, useAppSelector } from 'hooks/storehooks'
import { decreaseAmountOfItem, increaseAmountOfItem, removeCartItem } from 'redux/features/cart'
import QuantitySelector from 'components/QuantitySelector'
import ImageContainer from 'components/ImageContainer'
import { CartItem as CartItemProps } from 'types/StoreTypes'

const CartItem = ({ id, amount }: CartItemProps) => {
    const dispatch = useAppDispatch()
    const { productList } = useAppSelector((store) => store.products)

    const product = productList.find((product) => product.id === id)

    return (
        <>
            {product && (
                <div className='flex items-center w-9/12 min-w-[500px] my-[10px] mx-auto'>
                    <ImageContainer width={80} height={80} image={product.image} />
                    <div className='w-[500px] ml-[10px]'>
                        <h2 className='line-clamp-1 text-ellipsis text-xl m-0 mb-[10px]'>
                            {product.title}
                        </h2>
                        <QuantitySelector
                            quantity={amount}
                            increaseQuantity={() => dispatch(increaseAmountOfItem(id))}
                            decreaseQuantity={() => dispatch(decreaseAmountOfItem(id))}
                        />
                        <h3 className='inline ml-[10px]'>${(product.price * amount).toFixed(2)}</h3>
                    </div>
                    <button
                        className=' bg-red-500 text-white text-[15px] border-0 px-5 py-1 ml-10 rounded-[5px]'
                        onClick={() => dispatch(removeCartItem(id))}
                    >
                        REMOVE
                    </button>
                </div>
            )}
        </>
    )
}

export default CartItem
