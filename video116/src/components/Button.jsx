import React , {useContext} from 'react'
import Components1 from './Components1'
import { counterContext } from '../context/context'


const Button = () => {
  const value = useContext(counterContext)
  return (
    <>
      <button  onClick={() => value.setCount((count) => count + 1)}> <span> <Components1 /></span>i am button</button>
    </>
  )
}

export default Button