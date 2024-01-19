import React, { useContext } from 'react';
import { TiPlus, TiMinusOutline } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus size='1.5em' onClick={event=> increaseAllocation(props.name)} color ='Green'>+</TiPlus></td>
        <td><TiMinusOutline size='1.5em' onClick={handleDeleteExpense} color ='Red'></TiMinusOutline></td>
        </tr>
    );
};

export default ExpenseItem;
