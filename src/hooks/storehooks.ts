import { AppDispatch } from './../redux/store'
import { useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux/es/types'
import { RootState } from './../redux/store'
import { useSelector } from 'react-redux/es/exports'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
