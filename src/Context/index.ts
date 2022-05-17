import { createContext, Dispatch, SetStateAction } from 'react'

type ContextPropsType = {
  setIsAuth: Dispatch<SetStateAction<boolean>> | null
}

const Context = createContext<ContextPropsType>({
  setIsAuth: null,
})

export default Context
