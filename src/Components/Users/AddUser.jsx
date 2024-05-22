import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = ({ onAddUserToList }) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        onAddUserToList(enteredUsername, enteredAge);
        setEnteredAge(0);
        setEnteredUsername('');
    }

    const handleError = () => {
        setError(null);
    }

    return (
        <>
            { error && <ErrorModal title={error?.title} message={error?.message} onClose={handleError}/> }
            <Card  className={classes.input}>
                <form onSubmit={handleSubmitForm}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" value={enteredUsername} onChange={usernameChangeHandler} type="text" /> 
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" value={enteredAge} onChange={ageChangeHandler} type="number" /> 
                    <Button btnType="submit"> Add User </Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser