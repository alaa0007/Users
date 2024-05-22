import React from 'react'
import classes from './ErrorModal.module.css'
import Button from './Button'
import Card from './Card'
const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
        <div className={classes.backdrop} onClick={onClose} />
        <Card className={classes.modal}>
            <div className=''/>
            <header className={classes.header}>
                <h2> { title || 'An Error Occurred!'} </h2>
            </header>
            <div className={classes.content}>
                <p> {message || 'Something went wrong!'} </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={onClose}>Okay</Button>
            </footer>
        </Card>
    </>
  )
}

export default ErrorModal