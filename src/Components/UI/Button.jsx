import React from 'react'
import classes from './Button.module.css'
const Button = ({ children, btnType, onClick }) => {
  return (
    <button className={classes.button} type={btnType || 'button'} onClick={onClick} >
       { children }
    </button>
  )
}

export default Button